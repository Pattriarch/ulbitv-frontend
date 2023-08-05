import {
	getEditArticleData,
	getEditArticleError,
	getEditArticleForm,
	getEditArticleIsLoading,
} from '../..';

import { type StateSchema } from '@/app/providers/StoreProvider';
import { ARTICLE_FIXTURE } from '@/entities/Article/testing';

describe('addArticleSelectors', () => {
	describe('getEditArticleForm', () => {
		test('should return form data', () => {
			const state: DeepPartial<StateSchema> = {
				editArticleForm: {form: ARTICLE_FIXTURE}
			};
			expect(getEditArticleForm(state as StateSchema)).toEqual(ARTICLE_FIXTURE);
		});

		test('should work with empty state', () => {
			const state: DeepPartial<StateSchema> = {};
			expect(getEditArticleForm(state as StateSchema)).toEqual(undefined);
		});
	});
	describe('getEditArticleData', () => {
		test('should return data', () => {
			const state: DeepPartial<StateSchema> = {
				editArticleForm: {data: ARTICLE_FIXTURE}
			};
			expect(getEditArticleData(state as StateSchema)).toEqual(ARTICLE_FIXTURE);
		});

		test('should work with empty state', () => {
			const state: DeepPartial<StateSchema> = {};
			expect(getEditArticleData(state as StateSchema)).toEqual(undefined);
		});
	});
	describe('getEditArticleError', () => {
		test('should return error', () => {
			const state: DeepPartial<StateSchema> = {
				editArticleForm: {
					error: 'err',
				},
			};
			expect(getEditArticleError(state as StateSchema)).toEqual('err');
		});

		test('should work with empty state', () => {
			const state: DeepPartial<StateSchema> = {};
			expect(getEditArticleError(state as StateSchema)).toEqual('');
		});
	});
	describe('getEditArticleIsLoading', () => {
		test('should return IsLoading', () => {
			const state: DeepPartial<StateSchema> = {
				editArticleForm: {
					isLoading: true,
				},
			};
			expect(getEditArticleIsLoading(state as StateSchema)).toEqual(true);
		});

		test('should work with empty state', () => {
			const state: DeepPartial<StateSchema> = {};
			expect(getEditArticleIsLoading(state as StateSchema)).toEqual(false);
		});
	});
});

