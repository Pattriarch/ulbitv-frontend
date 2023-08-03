import { type StateSchema } from '@/app/providers/StoreProvider';
import {
	getEditArticleData,
	getEditArticleError,
	getEditArticleForm,
	getEditArticleIsLoading,
} from '@/features/EditArticleForm';

describe('addArticleSelectors', () => {
	describe('getEditArticleForm', () => {
		test('should return form data', () => {
			const form = {
				id: '1',
				title: 'test',
				subtitle: 'test',
				user: { id: '1', username: 'test' },
				img: '',
				views: 100,
				createdAt: '',
				type: [],
				blocks: [],
			};
			const state: DeepPartial<StateSchema> = {
				editArticleForm: {
					form
				}
			};
			expect(getEditArticleForm(state as StateSchema)).toEqual(form);
		});

		test('should work with empty state', () => {
			const state: DeepPartial<StateSchema> = {};
			expect(getEditArticleForm(state as StateSchema)).toEqual(undefined);
		});
	});
	describe('getEditArticleData', () => {
		test('should return data', () => {
			const data = {
				id: '1',
				title: 'test',
				subtitle: 'test',
				user: { id: '1', username: 'test' },
				img: '',
				views: 100,
				createdAt: '',
				type: [],
				blocks: [],
			};
			const state: DeepPartial<StateSchema> = {
				editArticleForm: {
					data
				}
			};
			expect(getEditArticleData(state as StateSchema)).toEqual(data);
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

