import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { type ArticleDetailsSchema } from '../types/articleDetailsSchema';

import { articleDetailsReducer } from './articleDetailsSlice';
import {
	ARTICLE_FIXTURE,
	ARTICLE_FIXTURE_ID,
} from '@/entities/Article/tests/articleFixture';

describe('articleDetailsSlice', () => {
	test('test fetch article by id service pending', () => {
		const state: DeepPartial<ArticleDetailsSchema> = {
			isLoading: false,
		};
		expect(
			articleDetailsReducer(
				state as ArticleDetailsSchema,
				fetchArticleById.pending,
			),
		).toEqual({
			isLoading: true,
		});
	});

	test('test fetch article by id service fulfilled', () => {
		const state: DeepPartial<ArticleDetailsSchema> = {
			isLoading: true,
		};
		expect(
			articleDetailsReducer(
				state as ArticleDetailsSchema,
				fetchArticleById.fulfilled(
					ARTICLE_FIXTURE.data,
					ARTICLE_FIXTURE_ID,
					'',
				),
			),
		).toEqual({
			isLoading: false,
			data: ARTICLE_FIXTURE.data,
		});
	});
});
