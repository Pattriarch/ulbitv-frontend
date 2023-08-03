import { type UserSchema } from '../types/user';

import { userActions, userReducer } from './userSlice';
import { USER_FIXTURE } from '@/entities/User/tests/userFixture';

describe('userSlice', () => {
	test('test set auth data', () => {
		const state: DeepPartial<UserSchema> = {
			authData: {},
		};
		expect(
			userReducer(
				state as UserSchema,
				userActions.setAuthData(USER_FIXTURE),
			),
		).toEqual({ authData: USER_FIXTURE });
	});
});
