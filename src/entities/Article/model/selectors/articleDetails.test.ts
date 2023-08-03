import { type DeepPartial } from '@reduxjs/toolkit';

import {
	getArticleDetailsData,
	getArticleDetailsError,
	getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';

import { type StateSchema } from '@/app/providers/StoreProvider';
import { ARTICLE_FIXTURE } from '@/entities/Article/tests/articleFixture';

describe('entities/Article/selectors/articleDetails', () => {
	test('should return article data', () => {
		const state: DeepPartial<StateSchema> = {
			articleDetails: ARTICLE_FIXTURE,
		};
		expect(getArticleDetailsData(state as StateSchema)).toEqual(
			ARTICLE_FIXTURE,
		);
	});

	test('should work with empty data state', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
	});

	test('should return error', () => {
		const state: DeepPartial<StateSchema> = {
			articleDetails: {
				error: 'error'
			},
		};
		expect(getArticleDetailsError(state as StateSchema)).toEqual(
			'error',
		);
	});

	test('should work with empty error state', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
	});

	test('should return isLoading', () => {
		const state: DeepPartial<StateSchema> = {
			articleDetails: {
				isLoading: true
			},
		};
		expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
	});

	test('should work with empty isLoading state', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false);
	});
});
