import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ProfileCardProps } from '../ProfileCard/ProfileCard';

import { CountrySelect } from '@/entities/Country';
import { CurrencySelect } from '@/entities/Currency';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Card } from '@/shared/ui/redesigned/Card';
import { Input } from '@/shared/ui/redesigned/Input';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

export const ProfileCardRedesignedSkeleton = () => {
	return (
		<Card padding={'24'} border={'partial'} max>
			<VStack gap={'32'}>
				<HStack max justify={'center'}>
					<Skeleton border={'100%'} width={128} height={128} />
				</HStack>
				<HStack gap={'32'} max>
					<VStack gap={'16'} max>
						<Skeleton width={'100%'} height={38} />
						<Skeleton width={'100%'} height={38} />
						<Skeleton width={'100%'} height={38} />
						<Skeleton width={'100%'} height={38} />
					</VStack>
					<VStack gap={'16'} max>
						<Skeleton width={'100%'} height={38} />
						<Skeleton width={'100%'} height={38} />
						<Skeleton width={'100%'} height={38} />
						<Skeleton width={'100%'} height={38} />
					</VStack>
				</HStack>
			</VStack>
		</Card>
	);
};

export const ProfileCardRedesignedError = () => {
	const { t } = useTranslation();

	return (
		<HStack justify={'center'}>
			<Text
				variant={'error'}
				align={'center'}
				title={t('Произошла ошибка при загрузке профиля')}
				text={t('Попробуйте обновить страницу')}
			/>
		</HStack>
	);
};

export const ProfileCardRedesigned = memo((props: ProfileCardProps) => {
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

	return (
		<Card max padding={'24'} border={'partial'} className={className}>
			<VStack gap={'32'}>
				{data?.avatar && (
					<HStack justify={'center'} max>
						<Avatar size={128} src={data?.avatar} />
					</HStack>
				)}
				<HStack max gap={'24'}>
					<VStack gap={'16'} max>
						<Input
							value={data?.firstName}
							label={t('Имя')}
							onChange={onChangeFirstName}
							readonly={readonly}
							data-testid={'ProfileCard.firstName'}
						/>
						<Input
							value={data?.lastName}
							label={t('Фамилия')}
							onChange={onChangeLastName}
							readonly={readonly}
							data-testid={'ProfileCard.lastName'}
						/>
						<Input
							value={data?.age}
							label={t('Возраст')}
							onChange={onChangeAge}
							readonly={readonly}
							data-testid={'ProfileCard.age'}
						/>
						<Input
							value={data?.city}
							label={t('Город')}
							onChange={onChangeCity}
							readonly={readonly}
							data-testid={'ProfileCard.city'}
						/>
					</VStack>
					<VStack gap={'16'} max>
						<Input
							value={data?.username}
							label={t('Имя пользователя')}
							onChange={onChangeUsername}
							readonly={readonly}
							data-testid={'ProfileCard.username'}
						/>
						<Input
							value={data?.avatar}
							label={t('Ссылка на аватар')}
							onChange={onChangeAvatar}
							readonly={readonly}
							data-testid={'ProfileCard.avatar'}
						/>
						<CurrencySelect
							value={data?.currency}
							onChange={onChangeCurrency}
							readonly={readonly}
							data-testid={'ProfileCard.currency'}
						/>
						<CountrySelect
							value={data?.country}
							onChange={onChangeCountry}
							readonly={readonly}
							data-testid={'ProfileCard.country'}
						/>
					</VStack>
				</HStack>
			</VStack>
		</Card>
	);
});
