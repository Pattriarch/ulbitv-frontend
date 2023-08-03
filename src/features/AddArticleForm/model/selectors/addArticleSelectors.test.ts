import { type StateSchema } from '@/app/providers/StoreProvider';
import {
	getAddArticleData,
	getAddArticleError,
	getAddArticleIsLoading,
} from '@/features/AddArticleForm/model/selectors/addArticleSelectors';
import { ARTICLE_FIXTURE } from '@/entities/Article/tests/articleFixture';

describe('addArticleSelectors', () => {
	describe('getAddArticleData', () => {
		test('should return error', () => {
			const state: DeepPartial<StateSchema> = {
				addArticleForm: ARTICLE_FIXTURE
			};
			expect(getAddArticleData(state as StateSchema)).toEqual(ARTICLE_FIXTURE.data);
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

