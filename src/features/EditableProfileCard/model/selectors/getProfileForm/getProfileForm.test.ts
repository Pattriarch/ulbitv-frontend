import { getProfileForm } from './getProfileForm';

import { type StateSchema } from '@/app/providers/StoreProvider';
import { PROFILE_FIXTURE } from '@/entities/Profile';

describe('getProfileForm', () => {
	test('should return profile form', () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				form: PROFILE_FIXTURE,
			},
		};
		expect(getProfileForm(state as StateSchema)).toEqual(PROFILE_FIXTURE);
	});

	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getProfileForm(state as StateSchema)).toEqual(undefined);
	});
});
