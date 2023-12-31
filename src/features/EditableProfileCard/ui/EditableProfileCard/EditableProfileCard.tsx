import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { ValidateProfileError } from '../../model/consts/consts';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import {
	profileActions,
	profileReducer,
} from '../../model/slices/profileSlice';
import { EditableProfileCardHeader } from '../../ui/EditableProfileCardHeader/EditableProfileCardHeader';

import { type Country } from '@/entities/Country';
import { type Currency } from '@/entities/Currency';
import { ProfileCard } from '@/entities/Profile';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
	DynamicModuleLoader,
	type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useAppEffect } from '@/shared/lib/hooks/useAppEffect/useAppEffect';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';

interface EditableProfileCardProps {
	/**
	 * Дополнительные стили компонента.
	 */
	className?: string;

	/**
	 * Уникальный идентификатор профиля.
	 */
	id?: string;
}

const reducers: ReducersList = {
	profile: profileReducer,
};

/**
 * Компонент EditableProfileCard - редактируемая карточка профиля.
 *
 * @component
 *
 * @param {Object} props - Пропсы компонента.
 * @param {string} props.className - Дополнительные стили компонента.
 * @param {string} props.id - Идентификатор пользователя.
 * @returns {JSX.Element} - Возвращает JSX элемент редактируемой карточки профиля.
 */
export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
	const { className, id } = props;
	const { t } = useTranslation('profile');

	const formData = useSelector(getProfileForm);
	const isLoading = useSelector(getProfileIsLoading);
	const error = useSelector(getProfileError);
	const readonly = useSelector(getProfileReadonly);
	const validateErrors = useSelector(getProfileValidateErrors);
	const dispatch = useAppDispatch();

	const validateErrorTranslates = {
		[ValidateProfileError.SERVER_ERROR]: t(
			'Серверная ошибка при сохранении',
		),
		[ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
		[ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректный регион'),
		[ValidateProfileError.INCORRECT_USER_DATA]: t(
			'Имя и фамилия обязательны',
		),
		[ValidateProfileError.NO_DATA]: t('Данные не указаны'),
	};

	useAppEffect(() => {
		if (id) {
			void dispatch(fetchProfileData(id));
		}
	}, [dispatch, id]);

	const onChangeFirstName = useCallback(
		(value: string) => {
			void dispatch(
				profileActions.updateProfile({ firstName: value || '' }),
			);
		},
		[dispatch],
	);

	const onChangeLastName = useCallback(
		(value: string) => {
			void dispatch(
				profileActions.updateProfile({ lastName: value || '' }),
			);
		},
		[dispatch],
	);

	const onChangeAge = useCallback(
		(value: string) => {
			if (/^\d+$/.test(value)) {
				void dispatch(
					profileActions.updateProfile({ age: Number(value || 0) }),
				);
			}
		},
		[dispatch],
	);

	const onChangeCity = useCallback(
		(value: string) => {
			void dispatch(profileActions.updateProfile({ city: value || '' }));
		},
		[dispatch],
	);

	const onChangeUsername = useCallback(
		(value: string) => {
			void dispatch(
				profileActions.updateProfile({ username: value || '' }),
			);
		},
		[dispatch],
	);

	const onChangeAvatar = useCallback(
		(value: string) => {
			void dispatch(
				profileActions.updateProfile({ avatar: value || '' }),
			);
		},
		[dispatch],
	);

	const onChangeCurrency = useCallback(
		(value: Currency) => {
			void dispatch(
				profileActions.updateProfile({ currency: value || '' }),
			);
		},
		[dispatch],
	);

	const onChangeCountry = useCallback(
		(value: Country) => {
			void dispatch(
				profileActions.updateProfile({ country: value || '' }),
			);
		},
		[dispatch],
	);

	return (
		<DynamicModuleLoader reducers={reducers}>
			<VStack gap={'8'} max className={classNames('', {}, [className])}>
				<EditableProfileCardHeader />
				{validateErrors?.length &&
					validateErrors.map((err, index) => (
						<Text
							theme={TextTheme.ERROR}
							text={validateErrorTranslates[err]}
							key={index}
							data-testid={'EditableProfileCard.Error'}
						/>
					))}
				<ProfileCard
					data={formData}
					isLoading={isLoading}
					error={error}
					readonly={readonly}
					onChangeFirstName={onChangeFirstName}
					onChangeLastName={onChangeLastName}
					onChangeAge={onChangeAge}
					onChangeCity={onChangeCity}
					onChangeUsername={onChangeUsername}
					onChangeAvatar={onChangeAvatar}
					onChangeCurrency={onChangeCurrency}
					onChangeCountry={onChangeCountry}
				/>
			</VStack>
		</DynamicModuleLoader>
	);
});
