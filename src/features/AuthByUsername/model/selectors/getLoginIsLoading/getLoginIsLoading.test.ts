import { getLoginIsLoading } from './getLoginIsLoading';

import { type StateSchema } from '@/app/providers/StoreProvider';

describe('getLoginIsLoading', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true
            }
        };
        expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    });
});
