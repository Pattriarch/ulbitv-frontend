import { type LoginSchema } from 'features/AuthByUsername';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = {
            username: 'test'
        };
        expect(loginReducer(
			state as LoginSchema,
			loginActions.setUsername('test123')
        )).toEqual({ username: 'test123' });
    });

    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = {
            password: 'test'
        };
        expect(loginReducer(
			state as LoginSchema,
			loginActions.setPassword('test123')
        )).toEqual({ password: 'test123' });
    });
});
