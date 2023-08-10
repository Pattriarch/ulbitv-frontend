import { fetchArticlesList } from './fetchArticlesList';

import { ARTICLE_FIXTURE } from '@/entities/Article/testing';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { REJECTED_FIXTURE } from '@/shared/tests/rejectedFixture';

describe('fetchArticlesList', () => {
	test('success', async () => {
		const thunk = new TestAsyncThunk(fetchArticlesList, {});

		thunk.api.get.mockReturnValue(
			Promise.resolve({ data: ARTICLE_FIXTURE }),
		);
		const result = await thunk.callThunk({});

		expect(thunk.api.get).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(result.payload).toBe(ARTICLE_FIXTURE);
	});

	test('without article id', async () => {
		const thunk = new TestAsyncThunk(fetchArticlesList, {});

		thunk.api.get.mockReturnValue(Promise.resolve(REJECTED_FIXTURE));
		const result = await thunk.callThunk({});

		expect(result.meta.requestStatus).toBe('rejected');
	});
});
