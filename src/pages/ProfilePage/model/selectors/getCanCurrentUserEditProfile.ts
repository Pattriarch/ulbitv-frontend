import { getUserAuthData } from '@/entities/User';
import { createSelector } from '@reduxjs/toolkit';
import { getProfileData } from '@/features/editableProfileCard';

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
