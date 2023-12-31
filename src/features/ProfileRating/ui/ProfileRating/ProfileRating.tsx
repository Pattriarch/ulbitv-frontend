import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
	useGetProfileRating,
	useRateProfile,
} from '../../api/profileRatingApi';

import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { ToggleFeatures } from '@/shared/lib/features';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

interface ProfileRatingProps {
	/**
	 * Дополнительные стили компонента.
	 */
	className?: string;

	/**
	 * Идентификатор профиля, для которого отображается рейтинг.
	 */
	profileId: string;
}

/**
 * Компонент ProfileRating - отображение и возможность оценки профиля.
 *
 * @component
 *
 * @param {Object} props - Пропсы компонента.
 * @param {string} props.className - Дополнительные стили компонента.
 * @param {string} props.profileId - Идентификатор профиля, для которого отображается рейтинг.
 * @returns {JSX.Element | null} - Возвращает JSX элемент с возможностью оценки профиля.
 */
export const ProfileRating = memo((props: ProfileRatingProps) => {
	const { className, profileId } = props;
	const { t } = useTranslation();
	const userData = useSelector(getUserAuthData);

	const { data, isLoading } = useGetProfileRating({
		profileId,
		userId: userData?.id ?? '',
	});

	const [rateProfileMutation] = useRateProfile();

	const handleRateProfile = useCallback(
		(starsCount: number) => {
			try {
				void rateProfileMutation({
					profileId,
					userId: userData?.id ?? '',
					rate: starsCount,
				});
			} catch (e) {
				console.log(e);
			}
		},
		[profileId, rateProfileMutation, userData?.id],
	);

	const onAccept = useCallback(
		(starsCount: number) => {
			handleRateProfile(starsCount);
		},
		[handleRateProfile],
	);

	if (profileId === userData?.id) {
		return null;
	}

	if (isLoading) {
		return (
			<ToggleFeatures
				name={'isAppRedesigned'}
				on={<Skeleton width={'100%'} height={135} />}
				off={<SkeletonDeprecated width={'100%'} height={120} />}
			/>
		);
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
