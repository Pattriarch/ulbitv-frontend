import { createAsyncThunk } from '@reduxjs/toolkit';

import {
	getArticlesPageLimit,
	getArticlesPageOrder,
	getArticlesPagePageNumber,
	getArticlesPageSearch,
	getArticlesPageSort,
	getArticlesPageType,
} from '../../selectors/articlesPageSelectors';

import { type ThunkConfig } from '@/app/providers/StoreProvider';
import { type Article, ArticleType } from '@/entities/Article';
import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams';

interface FetchArticlesListProps {
	replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
	Article[],
	FetchArticlesListProps,
	ThunkConfig<string>
>('articlesPage/fetchArticlesList', async (props, thunkAPI) => {
	const { extra, rejectWithValue, getState } = thunkAPI;

	const limit = getArticlesPageLimit(getState());
	const sort = getArticlesPageSort(getState());
	const order = getArticlesPageOrder(getState());
	const search = getArticlesPageSearch(getState());
	const page = getArticlesPagePageNumber(getState());
	const type = getArticlesPageType(getState());

	try {
		addQueryParams({ sort, order, search, type });
		const response = await extra.api.get<Article[]>('/articles', {
			params: {
				_expand: 'user',
				_limit: limit,
				_page: page,
				_sort: sort,
				_order: order,
				q: search,
				type_like: type === ArticleType.ALL ? undefined : type,
			},
		});

		if (!response.data) {
			throw new Error();
		}

		return response.data;
	} catch (e) {
		console.error(e);
		return rejectWithValue('error');
	}
});
