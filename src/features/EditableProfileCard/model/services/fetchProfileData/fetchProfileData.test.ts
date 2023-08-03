import { fetchProfileData } from './fetchProfileData';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { REJECTED_FIXTURE } from '@/shared/tests/rejectedFixture';
import { PROFILE_FIXTURE, PROFILE_FIXTURE_ID } from '@/entities/Profile/tests/profileFixture';

describe('fetchProfileData', () => {
	test('success', async () => {
		const thunk = new TestAsyncThunk(fetchProfileData);
		thunk.api.get.mockReturnValue(Promise.resolve({ PROFILE_FIXTURE }));
		const result = await thunk.callThunk(PROFILE_FIXTURE_ID);

		expect(thunk.api.get).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(result.payload).toBe(PROFILE_FIXTURE);
	});

	test('error fetch', async () => {
		const thunk = new TestAsyncThunk(fetchProfileData);
		thunk.api.get.mockReturnValue(Promise.resolve(REJECTED_FIXTURE));
		const result = await thunk.callThunk(PROFILE_FIXTURE_ID);

		expect(result.meta.requestStatus).toBe('rejected');
	});
});
