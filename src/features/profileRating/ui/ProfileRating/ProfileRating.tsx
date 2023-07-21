import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { useGetProfileRating, useRateProfile } from '../../api/profileRatingApi';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { RatingCard } from '@/entities/Rating';

interface ProfileRatingProps {
    className?: string;
    profileId: string;
}

export const ProfileRating = memo((props: ProfileRatingProps) => {
    const {
        className,
        profileId
    } = props;
    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);

    const {
        data,
        isLoading
    } = useGetProfileRating({
        profileId,
        userId: userData?.id ?? ''
    });

    const [rateProfileMutation] = useRateProfile();

    const handleRateProfile = useCallback((starsCount: number) => {
        try {
            void rateProfileMutation({
                profileId,
                userId: userData?.id ?? '',
                rate: starsCount
            });
        } catch (e) {
            console.log(e);
        }
    }, [profileId, rateProfileMutation, userData?.id]);

    const onAccept = useCallback((starsCount: number) => {
        handleRateProfile(starsCount);
    }, [handleRateProfile]);

    if (profileId === userData?.id) {
        return null;
    }

    if (isLoading) {
        return <Skeleton width={'100%'} height={120}/>;
    }

    const rating = data?.[0];

    return (
        <RatingCard
            onAccept={onAccept}
            rate={rating?.rate}
            className={className}
            title={t('Оцените профиль')}
        />
    );
});
