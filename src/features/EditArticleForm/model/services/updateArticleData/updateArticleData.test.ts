import { updateArticleData } from './updateArticleData';

import { ARTICLE_FIXTURE } from '@/entities/Article/testing';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { REJECTED_FIXTURE } from '@/shared/tests/rejectedFixture';


describe('updateArticleData', () => {
	test('success', async () => {
		const thunk = new TestAsyncThunk(updateArticleData, {
			editArticleForm: {
				form: ARTICLE_FIXTURE,
			},
		});

		thunk.api.put.mockReturnValue(Promise.resolve({ data: ARTICLE_FIXTURE }));
		const result = await thunk.callThunk();

		expect(thunk.api.put).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(result.payload).toBe(ARTICLE_FIXTURE);
	});

	test('server error', async () => {
		const thunk = new TestAsyncThunk(updateArticleData, {
			profile: {
				form: ARTICLE_FIXTURE,
			},
		});
		thunk.api.put.mockReturnValue(Promise.resolve(REJECTED_FIXTURE));
		const result = await thunk.callThunk();

		expect(result.meta.requestStatus).toBe('rejected');
	});
});
