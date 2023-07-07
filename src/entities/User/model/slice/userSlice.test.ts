import { userActions, userReducer } from './userSlice';
import { type User, type UserSchema } from '../types/user';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { updateProfileData } from 'entities/Profile';

const data: User = {
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
