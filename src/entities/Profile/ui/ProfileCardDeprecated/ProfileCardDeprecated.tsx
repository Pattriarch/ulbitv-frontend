import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ProfileCardProps } from '../ProfileCard/ProfileCard';

import { CountrySelect } from '@/entities/Country';
import { CurrencySelect } from '@/entities/Currency';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Loader } from '@/shared/ui/deprecated/Loader';
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

import cls from './ProfileCardDeprecated.module.scss';

export const ProfileCardDeprecatedLoader = () => {
	return (
		<HStack
			justify={'center'}
			className={classNames(cls.ProfileCard, {}, [cls.loading])}
		>
			<Loader />
		</HStack>
	);
};

export const ProfileCardDeprecatedError = () => {
	const { t } = useTranslation();

	return (
		<HStack
			justify={'center'}
			className={classNames(cls.ProfileCard, {}, [cls.error])}
		>
			<TextDeprecated
				theme={TextTheme.ERROR}
				title={t('Произошла ошибка при загрузке профиля')}
				text={t('Попробуйте обновить страницу')}
			/>
		</HStack>
	);
};

export const ProfileCardDeprecated = memo((props: ProfileCardProps) => {
	const {
		className,
		data,
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
					<AvatarDeprecated src={data?.avatar} />
				</HStack>
			)}
			<InputDeprecated
				value={data?.firstName}
				placeholder={t('Ваше имя')}
				className={cls.input}
				onChange={onChangeFirstName}
				readonly={readonly}
				data-testid={'ProfileCard.firstName'}
			/>
			<InputDeprecated
				value={data?.lastName}
				placeholder={t('Ваша фамилия')}
				className={cls.input}
				onChange={onChangeLastName}
				readonly={readonly}
				data-testid={'ProfileCard.lastName'}
			/>
			<InputDeprecated
				value={data?.age}
				placeholder={t('Ваш возраст')}
				className={cls.input}
				onChange={onChangeAge}
				readonly={readonly}
				data-testid={'ProfileCard.age'}
			/>
			<InputDeprecated
				value={data?.city}
				placeholder={t('Ваш город')}
				className={cls.input}
				onChange={onChangeCity}
				readonly={readonly}
				data-testid={'ProfileCard.city'}
			/>
			<InputDeprecated
				value={data?.username}
				placeholder={t('Введите имя пользователя')}
				className={cls.input}
				onChange={onChangeUsername}
				readonly={readonly}
				data-testid={'ProfileCard.username'}
			/>
			<InputDeprecated
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
});
