import { type DeepPartial } from '@reduxjs/toolkit';

import { USER_FIXTURE } from '../../../tests/userFixture';

import { getUserAuthData } from './getUserAuthData';

import { type StateSchema } from '@/app/providers/StoreProvider';

describe('getUserAuthData', () => {
	test('should return auth data', () => {
		const state: DeepPartial<StateSchema> = {
			user: { authData: USER_FIXTURE },
		};
		expect(getUserAuthData(state as StateSchema)).toEqual(USER_FIXTURE);
	});

	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {
			user: {},
		};
		expect(getUserAuthData(state as StateSchema)).toEqual(undefined);
	});
});
