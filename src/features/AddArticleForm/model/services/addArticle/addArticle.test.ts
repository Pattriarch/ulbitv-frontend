import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { REJECTED_FIXTURE } from '@/shared/tests/rejectedFixture';
import { initAuthData } from '@/entities/User';
import { USER_FIXTURE, USER_FIXTURE_ID } from '@/entities/User/tests/userFixture';
import { ARTICLE_FIXTURE } from '@/entities/Article/testing';
import { addArticle } from '@/features/AddArticleForm/model/services/addArticle/addArticle';
import { formatDate } from '@/shared/lib/date/formatDate';

describe('fetchArticleById', () => {
	test('success', async () => {
		const thunk = new TestAsyncThunk(addArticle, {
			addArticleForm: {
				data: ARTICLE_FIXTURE,
			},
			user: {
				authData: USER_FIXTURE,
			},
		});
		thunk.api.post.mockReturnValue(Promise.resolve({ data: ARTICLE_FIXTURE }));

		const result = await thunk.callThunk();

		expect(thunk.api.post).toHaveBeenCalled();
		expect(thunk.dispatch).toHaveBeenCalledTimes(2);
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(result.payload).toBe(ARTICLE_FIXTURE);
	});

	test('error without user id', async () => {
		const thunk = new TestAsyncThunk(addArticle, {
			addArticleForm: {
				data: ARTICLE_FIXTURE,
			},
			user: {},
		});
		const result = await thunk.callThunk();

		expect(thunk.api.post).not.toHaveBeenCalled();
		expect(thunk.dispatch).toHaveBeenCalledTimes(2);
		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toBe('error');
	});

	test('error post', async () => {
		const thunk = new TestAsyncThunk(addArticle, {
			addArticleForm: {
				data: ARTICLE_FIXTURE,
			},
			user: {
				authData: USER_FIXTURE,
			},
		});
		thunk.api.post.mockReturnValue(Promise.resolve(REJECTED_FIXTURE));
		const result = await thunk.callThunk();

		expect(thunk.api.post).toHaveBeenCalled();
		expect(thunk.dispatch).toHaveBeenCalledTimes(2);
		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toBe('error');
	});
});
