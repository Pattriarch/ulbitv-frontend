import { type User, type UserSchema } from '../types/user';

import { userActions, userReducer } from './userSlice';

const data: User = {
	id: '1',
	username: 'admin',
};

describe('userSlice', () => {
	test('test set auth data', () => {
		const state: DeepPartial<UserSchema> = {
			authData: {},
		};
		expect(
			userReducer(state as UserSchema, userActions.setAuthData(data)),
		).toEqual({ authData: data });
	});
});
