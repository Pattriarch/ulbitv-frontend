import { userActions, userReducer } from './userSlice';
import { type AuthData, type UserSchema } from '../types/authData';

const data: AuthData = {
    id: '1',
    username: 'admin'
};

describe('userSlice', () => {
    test('test set auth data', () => {
        const state: DeepPartial<UserSchema> = {
            authData: {}
        };
        expect(userReducer(
            state as UserSchema,
            userActions.setAuthData(data)
        )).toEqual({ authData: data });
    });
});
