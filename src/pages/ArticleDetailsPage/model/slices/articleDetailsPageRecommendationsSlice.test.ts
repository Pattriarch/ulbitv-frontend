import { type DeepPartial } from '@reduxjs/toolkit';

import { ArticleDetailsRecommendationsSchema } from '../..';
import {
	fetchArticleRecommendations,
} from '../services/fetchArticleRecommendations/fetchArticleRecommendations';

import {
	articleDetailsPageRecommendationsReducer,
} from './articleDetailsPageRecommendationsSlice';

describe('articleDetailsPageRecommendationsSlice', () => {
	test('test pending state', () => {
		const state: DeepPartial<ArticleDetailsRecommendationsSchema> = {
			isLoading: false,
		};
		expect(
			articleDetailsPageRecommendationsReducer(
				state as ArticleDetailsRecommendationsSchema,
				fetchArticleRecommendations.pending(''),
			),
		).toEqual({
			isLoading: true,
			error: undefined,
		});
	});

	test('test fulfilled state', () => {
		const state: DeepPartial<ArticleDetailsRecommendationsSchema> = {
			isLoading: true,
		};
		expect(
			articleDetailsPageRecommendationsReducer(
				state as ArticleDetailsRecommendationsSchema,
				fetchArticleRecommendations.fulfilled([{ id: '1' }], ''),
			),
		).toEqual({
			isLoading: false,
			entities: { 1: { id: '1' } },
			ids: ['1'],
		});
	});
});
