import { type Profile } from '../../model/types/profile';
import {
	ProfileCardDeprecated,
	ProfileCardDeprecatedError,
	ProfileCardDeprecatedLoader,
} from '../ProfileCardDeprecated/ProfileCardDeprecated';
import {
	ProfileCardRedesigned,
	ProfileCardRedesignedError,
	ProfileCardRedesignedSkeleton,
} from '../ProfileCardRedesigned/ProfileCardRedesigned';

import { type Country } from '@/entities/Country';
import { type Currency } from '@/entities/Currency';
import { ToggleFeatures } from '@/shared/lib/features';

export interface ProfileCardProps {
	/**
	 * Дополнительные стили компонента.
	 */
	className?: string;

	/**
	 * Данные профиля, используемые для отображения.
	 */
	data?: Profile;

	/**
	 * Указывает, находится ли компонент в состоянии загрузки данных.
	 */
	isLoading?: boolean;

	/**
	 * Текст ошибки, если данные не могут быть получены или обработаны.
	 */
	error?: string;

	/**
	 * Указывает, можно ли редактировать данные профиля.
	 */
	readonly?: boolean;

	/**
	 * Callback-функция, вызываемая при изменении имени.
	 * @param {string} value - Новое значение имени.
	 * @returns {void}
	 */
	onChangeFirstName?: (value: string) => void;

	/**
	 * Callback-функция, вызываемая при изменении фамилии.
	 * @param {string} value - Новое значение фамилии.
	 * @returns {void}
	 */
	onChangeLastName?: (value: string) => void;

	/**
	 * Callback-функция, вызываемая при изменении возраста.
	 * @param {string} value - Новое значение возраста.
	 * @returns {void}
	 */
	onChangeAge?: (value: string) => void;

	/**
	 * Callback-функция, вызываемая при изменении города.
	 * @param {string} value - Новое значение города.
	 * @returns {void}
	 */
	onChangeCity?: (value: string) => void;

	/**
	 * Callback-функция, вызываемая при изменении имени пользователя.
	 * @param {string} value - Новое значение имени пользователя.
	 * @returns {void}
	 */
	onChangeUsername?: (value: string) => void;

	/**
	 * Callback-функция, вызываемая при изменении аватара.
	 * @param {string} value - Новое значение аватара.
	 * @returns {void}
	 */
	onChangeAvatar?: (value: string) => void;

	/**
	 * Callback-функция, вызываемая при изменении валюты.
	 * @param {Currency} value - Новое значение валюты.
	 * @returns {void}
	 */
	onChangeCurrency?: (value: Currency) => void;

	/**
	 * Callback-функция, вызываемая при изменении страны.
	 * @param {Country} value - Новое значение страны.
	 * @returns {void}
	 */
	onChangeCountry?: (value: Country) => void;
}

/**
 * Компонент профиля пользователя.
 *
 * @component
 * @param {ProfileCardProps} props - Пропсы компонента `ProfileCard`.
 * @returns {JSX.Element} Карточка профиля пользователя.
 */
export const ProfileCard = (props: ProfileCardProps) => {
	const { isLoading, error } = props;

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
