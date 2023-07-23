import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchArticlesList } from '../../../model/services/fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../../model/slices/articlesPageSlice';
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';

import { type ThunkConfig } from '@/app/providers/StoreProvider';
import { type ArticleSortField, type ArticleType } from '@/entities/Article';
import { type SortOrder } from '@/shared/types';

export const initArticlesPage = createAsyncThunk<
	void,
	URLSearchParams,
	ThunkConfig<string>
>(
    'articlesPage/initArticlesPage',
    async (useSearchParams, thunkAPI) => {
        const { getState, dispatch } = thunkAPI;
        const inited = getArticlesPageInited(getState());

        if (!inited) {
            const orderFromUrl = useSearchParams.get('order') as SortOrder;
            const sortFromUrl = useSearchParams.get('sort') as ArticleSortField;
            const searchFromUrl = useSearchParams.get('search');
            const typeFromUrl = useSearchParams.get('type') as ArticleType;

            if (orderFromUrl) {
                dispatch(articlesPageActions.setOrder(orderFromUrl));
            }

	        if (sortFromUrl) {
		        dispatch(articlesPageActions.setSort(sortFromUrl));
	        }

	        if (searchFromUrl) {
		        dispatch(articlesPageActions.setSearch(searchFromUrl));
	        }

	        if (typeFromUrl) {
		        dispatch(articlesPageActions.setType(typeFromUrl));
	        }

            void dispatch(articlesPageActions.initState());
            void dispatch(fetchArticlesList({}));
        }
    }
);
