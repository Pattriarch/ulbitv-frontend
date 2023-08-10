import { getProfileData } from './getProfileData';

import { type StateSchema } from '@/app/providers/StoreProvider';
import { PROFILE_FIXTURE } from '@/entities/Profile/testing';

describe('getProfileData', () => {
	test('should return profile data', () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				data: PROFILE_FIXTURE
			}
		};
		expect(getProfileData(state as StateSchema)).toEqual(PROFILE_FIXTURE);
	});

	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getProfileData(state as StateSchema)).toEqual(undefined);
	});
});
