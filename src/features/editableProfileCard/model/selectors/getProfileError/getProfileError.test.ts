import { getProfileError } from './getProfileError';

import { type StateSchema } from '@/app/providers/StoreProvider';

describe('getProfileError', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: 'err'
            }
        };
        expect(getProfileError(state as StateSchema)).toEqual('err');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});
