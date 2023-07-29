import { useTranslation } from 'react-i18next';

import { type Profile } from '../../model/types/profile';

import { type Country } from '@/entities/Country';
import { type Currency } from '@/entities/Currency';

import { ToggleFeatures } from '@/shared/lib/features';
import {
	ProfileCardDeprecated,
	ProfileCardDeprecatedError,
	ProfileCardDeprecatedLoader,
} from '@/entities/Profile/ui/ProfileCardDeprecated/ProfileCardDeprecated';
import {
	ProfileCardRedesigned,
	ProfileCardRedesignedError,
	ProfileCardRedesignedSkeleton,
} from '@/entities/Profile/ui/ProfileCardRedesigned/ProfileCardRedesigned';

export interface ProfileCardProps {
	className?: string;
	data?: Profile;
	isLoading?: boolean;
	error?: string;
	readonly?: boolean;
	onChangeFirstName?: (value: string) => void;
	onChangeLastName?: (value: string) => void;
	onChangeAge?: (value: string) => void;
	onChangeCity?: (value: string) => void;
	onChangeUsername?: (value: string) => void;
	onChangeAvatar?: (value: string) => void;
	onChangeCurrency?: (value: Currency) => void;
	onChangeCountry?: (value: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
	const { isLoading, error } = props;
	const { t } = useTranslation('profile');

	if (isLoading) {
		return (
			<ToggleFeatures
				name={'isAppRedesigned'}
				on={<ProfileCardRedesignedSkeleton />}
				off={<ProfileCardDeprecatedLoader />}
			/>
		);
	}

	if (error) {
		return (
			<ToggleFeatures
				name={'isAppRedesigned'}
				on={<ProfileCardRedesignedError />}
				off={<ProfileCardDeprecatedError />}
			/>
		);
	}

	return (
		<ToggleFeatures
			name={'isAppRedesigned'}
			on={<ProfileCardRedesigned {...props} />}
			off={<ProfileCardDeprecated {...props} />}
		/>
	);
};
