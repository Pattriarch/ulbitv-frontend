import { type StateSchema } from 'app/providers/StoreProvider';
import { getUserInited } from './getUserInited';
import { type DeepPartial } from '@reduxjs/toolkit';

describe('getUserAuthData', () => {
    test('should return auth data', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                _inited: true
            }
        };
        expect(getUserInited(state as StateSchema)).toEqual(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            user: {}
        };
        expect(getUserInited(state as StateSchema)).toEqual(undefined);
    });
});
