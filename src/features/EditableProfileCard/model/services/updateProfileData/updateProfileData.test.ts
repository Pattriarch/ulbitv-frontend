import { ValidateProfileError } from '../../consts/consts';

import { updateProfileData } from './updateProfileData';

import { PROFILE_FIXTURE } from '@/entities/Profile/testing';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { REJECTED_FIXTURE } from '@/shared/tests/rejectedFixture';

describe('updateProfileData', () => {
	test('success', async () => {
		const thunk = new TestAsyncThunk(updateProfileData, {
			profile: {
				form: PROFILE_FIXTURE,
			},
		});

		thunk.api.put.mockReturnValue(
			Promise.resolve({ data: PROFILE_FIXTURE }),
		);
		const result = await thunk.callThunk();

		expect(thunk.api.put).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(result.payload).toBe(PROFILE_FIXTURE);
	});

	test('server error', async () => {
		const thunk = new TestAsyncThunk(updateProfileData, {
			profile: {
				form: PROFILE_FIXTURE,
			},
		});
		thunk.api.put.mockReturnValue(Promise.resolve(REJECTED_FIXTURE));
		const result = await thunk.callThunk();

		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
	});

	test('client validation error', async () => {
		const thunk = new TestAsyncThunk(updateProfileData, {
			profile: {
				form: { ...PROFILE_FIXTURE, lastName: '' },
			},
		});
		const result = await thunk.callThunk();

		expect(thunk.api.put).not.toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toEqual([
			ValidateProfileError.INCORRECT_USER_DATA,
		]);
	});
});
