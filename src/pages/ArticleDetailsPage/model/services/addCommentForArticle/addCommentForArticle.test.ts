import { addCommentForArticle } from './addCommentForArticle';

import { ARTICLE_FIXTURE, ARTICLE_FIXTURE_ID } from '@/entities/Article/testing';
import { COMMENT_FIXTURE } from '@/entities/Comment/testing';
import { USER_FIXTURE } from '@/entities/User/testing';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { REJECTED_FIXTURE } from '@/shared/tests/rejectedFixture';

describe('addCommentForArticle', () => {
	test('success', async () => {
		const thunk = new TestAsyncThunk(addCommentForArticle, {
			user: {
				authData: USER_FIXTURE,
			},
			articleDetails: {
				data: ARTICLE_FIXTURE
			},
		});

		thunk.api.post.mockReturnValue(Promise.resolve({ data: COMMENT_FIXTURE }));
		const result = await thunk.callThunk(ARTICLE_FIXTURE_ID);

		expect(thunk.api.post).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(result.payload).toBe(COMMENT_FIXTURE);
	});

	test('server error', async () => {
		const thunk = new TestAsyncThunk(addCommentForArticle, {
			user: {
				authData: USER_FIXTURE,
			},
			articleDetails: {
				data: ARTICLE_FIXTURE
			},
		});
		thunk.api.post.mockReturnValue(Promise.resolve(REJECTED_FIXTURE));
		const result = await thunk.callThunk(ARTICLE_FIXTURE_ID);

		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toEqual('error');
	});
});
