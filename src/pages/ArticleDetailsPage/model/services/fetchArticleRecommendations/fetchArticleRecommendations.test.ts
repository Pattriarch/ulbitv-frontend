import { fetchArticleRecommendations } from './fetchArticleRecommendations';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { ARTICLES_FIXTURE } from '@/entities/Article/tests/articleFixture';

describe('fetchArticleRecommendations', () => {
	test('success', async () => {
		const thunk = new TestAsyncThunk(fetchArticleRecommendations, {});

		thunk.api.get.mockReturnValue(Promise.resolve({ data: ARTICLES_FIXTURE }));
		const result = await thunk.callThunk();

		expect(thunk.api.get).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(result.payload).toBe(ARTICLES_FIXTURE);
	});
});
