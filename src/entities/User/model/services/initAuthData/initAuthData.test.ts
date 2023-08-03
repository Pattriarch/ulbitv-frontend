import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { REJECTED_FIXTURE } from '@/shared/tests/rejectedFixture';
import { initAuthData } from '@/entities/User';
import { USER_FIXTURE, USER_FIXTURE_ID } from '@/entities/User/tests/userFixture';
import { LOCAL_STORAGE_LAST_DESIGN_KEY } from '@/shared/const/localStorage';

describe('fetchArticleById', () => {
	Storage.prototype.setItem = jest.fn((key, value) =>
		console.log(`Setting ${key} to ${value}`),
	);

	test('success', async () => {
		Storage.prototype.getItem = jest.fn(() => USER_FIXTURE_ID);
		const thunk = new TestAsyncThunk(initAuthData);
		thunk.dispatch.mockReturnValue({
			unwrap: () => Promise.resolve(USER_FIXTURE),
		});

		const result = await thunk.callThunk();

		expect(localStorage.setItem).toHaveBeenCalledWith(
			LOCAL_STORAGE_LAST_DESIGN_KEY,
			'new',
		);
		expect(thunk.dispatch).toHaveBeenCalledTimes(3);
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(result.payload).toBe(USER_FIXTURE);
	});

	test('error without id', async () => {
		Storage.prototype.getItem = jest.fn(() => null);
		const thunk = new TestAsyncThunk(initAuthData);
		thunk.dispatch.mockReturnValue(Promise.resolve(REJECTED_FIXTURE));
		const result = await thunk.callThunk();

		expect(thunk.dispatch).toHaveBeenCalledTimes(2);
		expect(localStorage.setItem).not.toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toBe('Не был передан userId');
	});

	test('error dispatch', async () => {
		Storage.prototype.getItem = jest.fn(() => USER_FIXTURE_ID);
		const thunk = new TestAsyncThunk(initAuthData);
		thunk.dispatch.mockReturnValue(Promise.resolve(REJECTED_FIXTURE));
		const result = await thunk.callThunk();

		expect(thunk.dispatch).toHaveBeenCalledTimes(3);
		expect(localStorage.setItem).not.toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toBe('error');
	});
});
