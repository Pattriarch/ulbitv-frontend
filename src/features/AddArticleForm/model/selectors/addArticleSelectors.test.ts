import { type StateSchema } from '@/app/providers/StoreProvider';
import {
	getAddArticleData,
	getAddArticleError,
	getAddArticleIsLoading,
} from '@/features/AddArticleForm/model/selectors/addArticleSelectors';

describe('addArticleSelectors', () => {
	describe('getAddArticleData', () => {
		test('should return error', () => {
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
				addArticleForm: {
					data
				}
			};
			expect(getAddArticleData(state as StateSchema)).toEqual(data);
		});

		test('should work with empty state', () => {
			const state: DeepPartial<StateSchema> = {};
			expect(getAddArticleData(state as StateSchema)).toEqual(undefined);
		});
	});
	describe('getAddArticleError', () => {
		test('should return error', () => {
			const state: DeepPartial<StateSchema> = {
				addArticleForm: {
					error: 'err',
				},
			};
			expect(getAddArticleError(state as StateSchema)).toEqual('err');
		});

		test('should work with empty state', () => {
			const state: DeepPartial<StateSchema> = {};
			expect(getAddArticleError(state as StateSchema)).toEqual('');
		});
	});
	describe('getAddArticleIsLoading', () => {
		test('should return IsLoading', () => {
			const state: DeepPartial<StateSchema> = {
				addArticleForm: {
					isLoading: true,
				},
			};
			expect(getAddArticleIsLoading(state as StateSchema)).toEqual(true);
		});

		test('should work with empty state', () => {
			const state: DeepPartial<StateSchema> = {};
			expect(getAddArticleIsLoading(state as StateSchema)).toEqual(false);
		});
	});
});

