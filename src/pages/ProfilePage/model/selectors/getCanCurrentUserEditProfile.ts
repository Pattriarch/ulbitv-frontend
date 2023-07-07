import { getUserAuthData } from 'entities/User';
import { getProfileData } from 'entities/Profile';
import { createSelector } from '@reduxjs/toolkit';

export const getCanCurrentUserEditProfile = createSelector(
    getUserAuthData,
    getProfileData,
    (authData, profileData) => {
        if (!authData?.id || !profileData?.id) {
            return false;
        }
        return authData?.id === profileData?.id;
    }
);
