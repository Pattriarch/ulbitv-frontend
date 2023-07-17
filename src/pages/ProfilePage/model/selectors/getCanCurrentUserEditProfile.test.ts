// import { getUserAuthData } from 'entities/User';
// import { getProfileData } from 'entities/Profile';
// import { createSelector } from '@reduxjs/toolkit';
// import { StateSchema } from 'app/providers/StoreProvider';
// import { getLoginUsername } from 'features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername';
//
// export const getCanCurrentUserEditProfile = createSelector(
//     getUserAuthData,
//     getProfileData,
//     (authData, profileData) => authData?.id === profileData?.id
// );

import { type StateSchema } from '@/app/providers/StoreProvider';
import { getCanCurrentUserEditProfile } from './getCanCurrentUserEditProfile';

describe('getCanCurrentUserEditProfile', () => {
    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                authData: {
                    id: '1',
                    username: 'test'
                }
            },
            profile: {
                data: {
                    id: '1',
                    username: 'test'
                }
            }
        };
        expect(getCanCurrentUserEditProfile(state as StateSchema)).toEqual(true);
    });

    test('should return false', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                authData: {
                    id: '1',
                    username: 'test'
                }
            },
            profile: {
                data: {
                    id: '2',
                    username: 'test_2'
                }
            }
        };
        expect(getCanCurrentUserEditProfile(state as StateSchema)).toEqual(false);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            user: {},
            profile: {}
        };
        expect(getCanCurrentUserEditProfile(state as StateSchema)).toEqual(false);
    });
});
