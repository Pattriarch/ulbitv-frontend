import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticlesList } from '@/pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';
import { ARTICLE_FIXTURE } from '@/entities/Article/tests/articleFixture';
import { REJECTED_FIXTURE } from '@/shared/tests/rejectedFixture';

describe('fetchArticlesList', () => {
	test('success', async () => {
		const thunk = new TestAsyncThunk(fetchArticlesList, {});

		thunk.api.get.mockReturnValue(Promise.resolve( ARTICLE_FIXTURE ));
		const result = await thunk.callThunk({});

		expect(thunk.api.get).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(result.payload).toBe(ARTICLE_FIXTURE.data);
	});

	test('without article id', async () => {
		const thunk = new TestAsyncThunk(fetchArticlesList, {});

		thunk.api.get.mockReturnValue(Promise.resolve(REJECTED_FIXTURE));
		const result = await thunk.callThunk({});

		expect(result.meta.requestStatus).toBe('rejected');
	});
});
