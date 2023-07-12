import { classNames, type Mods } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { useTranslation } from 'react-i18next';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { type Profile } from '../../model/types/profile';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';

import { type Currency } from 'entities/Currency/model/types/currency';
import { CurrencySelect } from 'entities/Currency';

import { type Country } from 'entities/Country/model/types/country';
import { CountrySelect } from 'entities/Country';
import { HStack, VStack } from 'shared/ui/Stack';

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
		onChangeCountry
	} = props;
	const { t } = useTranslation('profile');

	if (isLoading) {
		return (
			<HStack justify={'center'} className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
				<Loader/>
			</HStack>
		);
	}

	if (error) {
		return (
			<HStack justify={'center'} className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
				<Text
					theme={TextTheme.ERROR}
					title={t('Произошла ошибка при загрузке профиля')}
					text={t('Попробуйте обновить страницу')}
				/>
			</HStack>
		);
	}

	const mods: Mods = {
		[cls.editing]: !readonly
	};

	return (
		<VStack gap={'16'} max className={classNames(cls.ProfileCard, mods, [className])}>
			{data?.avatar && (
				<HStack justify={'center'} max className={cls.avatarWrapper}>
					<Avatar src={data?.avatar}/>
				</HStack>
			)}
			<Input
				value={data?.firstName}
				placeholder={t('Ваше имя')}
				className={cls.input}
				onChange={onChangeFirstName}
				readonly={readonly}
			/>
			<Input
				value={data?.lastName}
				placeholder={t('Ваша фамилия')}
				className={cls.input}
				onChange={onChangeLastName}
				readonly={readonly}
			/>
			<Input
				value={data?.age}
				placeholder={t('Ваш возраст')}
				className={cls.input}
				onChange={onChangeAge}
				readonly={readonly}
			/>
			<Input
				value={data?.city}
				placeholder={t('Ваш город')}
				className={cls.input}
				onChange={onChangeCity}
				readonly={readonly}
			/>
			<Input
				value={data?.username}
				placeholder={t('Введите имя пользователя')}
				className={cls.input}
				onChange={onChangeUsername}
				readonly={readonly}
			/>
			<Input
				value={data?.avatar}
				placeholder={t('Введите ссылку на аватар')}
				className={cls.input}
				onChange={onChangeAvatar}
				readonly={readonly}
			/>
			<CurrencySelect
				className={cls.input}
				value={data?.currency}
				onChange={onChangeCurrency}
				readonly={readonly}
			/>
			<CountrySelect
				className={cls.input}
				value={data?.country}
				onChange={onChangeCountry}
				readonly={readonly}
			/>
		</VStack>
	);
};
