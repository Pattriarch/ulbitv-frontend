import { fetchCommentsByArticleId } from './fetchCommentsByArticleId';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { COMMENTS_FIXTURE } from '@/entities/Comment/tests/commentFixture';
import { REJECTED_FIXTURE } from '@/shared/tests/rejectedFixture';

describe('fetchCommentsByArticleId', () => {
	test('success', async () => {
		const thunk = new TestAsyncThunk(fetchCommentsByArticleId, {});

		thunk.api.get.mockReturnValue(Promise.resolve({ data: COMMENTS_FIXTURE }));
		const result = await thunk.callThunk('1');

		expect(thunk.api.get).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(result.payload).toBe(COMMENTS_FIXTURE);
	});

	test('without article id', async () => {
		const thunk = new TestAsyncThunk(fetchCommentsByArticleId, {});

		thunk.api.get.mockReturnValue(Promise.resolve(REJECTED_FIXTURE));
		const result = await thunk.callThunk(undefined);

		expect(thunk.api.get).not.toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('rejected');
	});
});
