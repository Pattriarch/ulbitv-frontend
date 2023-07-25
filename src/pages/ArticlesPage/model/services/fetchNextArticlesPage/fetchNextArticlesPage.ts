import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchArticlesList } from '../../../model/services/fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../../model/slices/articlesPageSlice';
import {
	getArticlesPageHasMore,
	getArticlesPageIsLoading,
	getArticlesPagePageNumber,
} from '../../selectors/articlesPageSelectors';

import { type ThunkConfig } from '@/app/providers/StoreProvider';

export const fetchNextArticlesPage = createAsyncThunk<
	void,
	void,
	ThunkConfig<string>
>('articlesPage/fetchNextArticlesPage', async (_, thunkAPI) => {
	const { getState, dispatch } = thunkAPI;

	const hasMore = getArticlesPageHasMore(getState());
	const page = getArticlesPagePageNumber(getState());
	const isLoading = getArticlesPageIsLoading(getState());

	if (hasMore && !isLoading) {
		void dispatch(articlesPageActions.setPage(page + 1));
		void dispatch(fetchArticlesList({}));
	}
});
