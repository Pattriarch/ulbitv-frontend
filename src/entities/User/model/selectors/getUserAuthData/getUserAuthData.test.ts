// import { type StateSchema } from 'app/providers/StoreProvider';
// import { type User } from 'entities/User';
//
// export const getUserAuthData = (state: StateSchema): User | undefined => state.user.authData;

import { type DeepPartial } from '@reduxjs/toolkit';

import { getUserAuthData } from './getUserAuthData';

import { type StateSchema } from '@/app/providers/StoreProvider';

describe('getUserAuthData', () => {
	test('should return auth data', () => {
		const authData = {
			id: '1',
			username: 'admin',
		};
		const state: DeepPartial<StateSchema> = {
			user: {
				authData,
			},
		};
		expect(getUserAuthData(state as StateSchema)).toEqual(authData);
	});

	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {
			user: {},
		};
		expect(getUserAuthData(state as StateSchema)).toEqual(undefined);
	});
});
