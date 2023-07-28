import { useTranslation } from 'react-i18next';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Input } from '@/shared/ui/deprecated/Input';
import { Loader } from '@/shared/ui/deprecated/Loader';
import { HStack, VStack } from '@/shared/ui/deprecated/Stack';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';

import { type Profile } from '../../model/types/profile';

import { type Country } from '@/entities/Country';
import { CountrySelect } from '@/entities/Country';
import { type Currency } from '@/entities/Currency';
import { CurrencySelect } from '@/entities/Currency';
import { classNames, type Mods } from '@/shared/lib/classNames/classNames';

import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
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
	const {
		className,
		data,
		isLoading,
		error,
		readonly,
		onChangeFirstName,
		onChangeLastName,
		onChangeAge,
		onChangeCity,
		onChangeUsername,
		onChangeAvatar,
		onChangeCurrency,
		onChangeCountry,
	} = props;
	const { t } = useTranslation('profile');

	if (isLoading) {
		return (
			<HStack
				justify={'center'}
				className={classNames(cls.ProfileCard, {}, [
					className,
					cls.loading,
				])}
			>
				<Loader />
			</HStack>
		);
	}

	if (error) {
		return (
			<HStack
				justify={'center'}
				className={classNames(cls.ProfileCard, {}, [
					className,
					cls.error,
				])}
			>
				<Text
					theme={TextTheme.ERROR}
					title={t('Произошла ошибка при загрузке профиля')}
					text={t('Попробуйте обновить страницу')}
				/>
			</HStack>
		);
	}

	const mods: Mods = {
		[cls.editing]: !readonly,
	};

	return (
		<VStack
			gap={'16'}
			max
			className={classNames(cls.ProfileCard, mods, [className])}
		>
			{data?.avatar && (
				<HStack justify={'center'} max className={cls.avatarWrapper}>
					<Avatar src={data?.avatar} />
				</HStack>
			)}
			<Input
				value={data?.firstName}
				placeholder={t('Ваше имя')}
				className={cls.input}
				onChange={onChangeFirstName}
				readonly={readonly}
				data-testid={'ProfileCard.firstName'}
			/>
			<Input
				value={data?.lastName}
				placeholder={t('Ваша фамилия')}
				className={cls.input}
				onChange={onChangeLastName}
				readonly={readonly}
				data-testid={'ProfileCard.lastName'}
			/>
			<Input
				value={data?.age}
				placeholder={t('Ваш возраст')}
				className={cls.input}
				onChange={onChangeAge}
				readonly={readonly}
				data-testid={'ProfileCard.age'}
			/>
			<Input
				value={data?.city}
				placeholder={t('Ваш город')}
				className={cls.input}
				onChange={onChangeCity}
				readonly={readonly}
				data-testid={'ProfileCard.city'}
			/>
			<Input
				value={data?.username}
				placeholder={t('Введите имя пользователя')}
				className={cls.input}
				onChange={onChangeUsername}
				readonly={readonly}
				data-testid={'ProfileCard.username'}
			/>
			<Input
				value={data?.avatar}
				placeholder={t('Введите ссылку на аватар')}
				className={cls.input}
				onChange={onChangeAvatar}
				readonly={readonly}
				data-testid={'ProfileCard.avatar'}
			/>
			<CurrencySelect
				className={cls.input}
				value={data?.currency}
				onChange={onChangeCurrency}
				readonly={readonly}
				data-testid={'ProfileCard.currency'}
			/>
			<CountrySelect
				className={cls.input}
				value={data?.country}
				onChange={onChangeCountry}
				readonly={readonly}
				data-testid={'ProfileCard.country'}
			/>
		</VStack>
	);
};
