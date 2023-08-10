import {
	ARTICLE_FIXTURE,
	ARTICLE_FIXTURE_ID,
} from '../../../tests/articleFixture';

import { fetchArticleById } from './fetchArticleById';

import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { REJECTED_FIXTURE } from '@/shared/tests/rejectedFixture';

describe('fetchArticleById', () => {
	test('success', async () => {
		const thunk = new TestAsyncThunk(fetchArticleById);
		thunk.api.get.mockReturnValue(
			Promise.resolve({ data: ARTICLE_FIXTURE }),
		);
		const result = await thunk.callThunk(ARTICLE_FIXTURE_ID);

		expect(thunk.api.get).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(result.payload).toBe(ARTICLE_FIXTURE);
	});

	test('error fetch', async () => {
		const thunk = new TestAsyncThunk(fetchArticleById);
		thunk.api.get.mockReturnValue(Promise.resolve(REJECTED_FIXTURE));
		const result = await thunk.callThunk(ARTICLE_FIXTURE_ID);

		expect(result.meta.requestStatus).toBe('rejected');
	});
});
