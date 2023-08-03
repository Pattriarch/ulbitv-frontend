import { type DeepPartial } from '@reduxjs/toolkit';

import { type StateSchema } from '@/app/providers/StoreProvider';
import { getUserRoles, isUserAdmin, isUserManager, UserRole } from '@/entities/User';

describe('roleSelectors', () => {
	describe('getUserRoles', () => {
		test('should return user roles', () => {
			const state: DeepPartial<StateSchema> = {
				user: {
					authData: {
						id: '1',
						username: 'test',
						roles: [UserRole.USER, UserRole.MANAGER]
					}
				},
			};
			expect(getUserRoles(state as StateSchema)).toEqual([UserRole.USER, UserRole.MANAGER]);
		});

		test('should work with empty state', () => {
			const state: DeepPartial<StateSchema> = {
				user: {},
			};
			expect(getUserRoles(state as StateSchema)).toEqual(undefined);
		});
	});

	describe('isUserAdmin', () => {
		test('should return true for admin user', () => {
			const state: DeepPartial<StateSchema> = {
				user: {
					authData: {
						id: '1',
						username: 'test',
						roles: [UserRole.ADMIN]
					}
				},
			};
			expect(isUserAdmin(state as StateSchema)).toEqual(true);
		});

		test('should return false for non-admin user', () => {
			const state: DeepPartial<StateSchema> = {
				user: {
					authData: {
						id: '1',
						username: 'test',
						roles: [UserRole.USER]
					}
				},
			};
			expect(isUserAdmin(state as StateSchema)).toEqual(false);
		});

		test('should work with empty state', () => {
			const state: DeepPartial<StateSchema> = {
				user: {},
			};
			expect(isUserAdmin(state as StateSchema)).toEqual(false);
		});
	});

	describe('isUserManager', () => {
		test('should return true for manager user', () => {
			const state: DeepPartial<StateSchema> = {
				user: {
					authData: {
						id: '1',
						username: 'test',
						roles: [UserRole.MANAGER]
					}
				},
			};
			expect(isUserManager(state as StateSchema)).toEqual(true);
		});

		test('should return false for non-manager user', () => {
			const state: DeepPartial<StateSchema> = {
				user: {
					authData: {
						id: '1',
						username: 'test',
						roles: [UserRole.USER]
					}
				},
			};
			expect(isUserManager(state as StateSchema)).toEqual(false);
		});

		test('should work with empty state', () => {
			const state: DeepPartial<StateSchema> = {
				user: {},
			};
			expect(isUserManager(state as StateSchema)).toEqual(false);
		});
	});
});
