import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations/fetchArticleRecommendations';
import { type ArticleDetailsRecommendationsSchema } from '../types/ArticleDetailsRecommendationsSchema';

import { type StateSchema } from '@/app/providers/StoreProvider';
import { type Article } from '@/entities/Article';

const recommendationsAdapter = createEntityAdapter<Article>({
	selectId: (article) => article.id || -1,
});
export const getArticleRecommendations =
	recommendationsAdapter.getSelectors<StateSchema>(
		(state) =>
			state.articleDetailsPage?.recommendations ||
			recommendationsAdapter.getInitialState(),
	);

const articleDetailsPageRecommendationsSlice = createSlice({
	name: 'articleDetailsPageRecommendationsSlice',
	initialState:
		recommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>(
			{
				isLoading: false,
				error: undefined,
				ids: [],
				entities: {},
			},
		),
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchArticleRecommendations.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(fetchArticleRecommendations.fulfilled, (state, action) => {
				state.isLoading = false;
				recommendationsAdapter.setAll(state, action.payload);
			})
			.addCase(fetchArticleRecommendations.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { reducer: articleDetailsPageRecommendationsReducer } =
	articleDetailsPageRecommendationsSlice;
