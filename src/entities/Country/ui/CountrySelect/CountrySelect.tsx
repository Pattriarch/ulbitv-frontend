import { useTranslation } from 'react-i18next';

import { Country } from '../../model/types/country';

import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ListBox } from '@/shared/ui/redesigned/Popups';

interface CountrySelectProps {
	/**
	 * Дополнительные стили компонента.
	 */
	className?: string;

	/**
	 * Текущее значение выбранной страны.
	 */
	value?: Country;

	/**
	 * Callback-функция, вызываемая при изменении выбранной страны.
	 * @param {Country} value - Новое значение выбранной страны.
	 * @returns {void}
	 */
	onChange?: (value: Country) => void;

	/**
	 * Указывает, можно ли редактировать выбранную страну.
	 */
	readonly?: boolean;
}

const options = [
	{
		value: Country.Russia,
		content: Country.Russia,
	},
	{
		value: Country.Belarus,
		content: Country.Belarus,
	},
	{
		value: Country.Ukraine,
		content: Country.Ukraine,
	},
	{
		value: Country.Kazakhstan,
		content: Country.Kazakhstan,
	},
	{
		value: Country.Armenia,
		content: Country.Armenia,
	},
];

/**
 * Компонент выпадающего списка для выбора страны.
 *
 * @component
 * @param {CountrySelectProps} props - Пропсы компонента `CountrySelect`.
 * @returns {JSX.Element} Элемент выпадающего списка для выбора страны.
 */
export const CountrySelect = (props: CountrySelectProps): JSX.Element => {
	const { className, value, onChange, readonly } = props;

	const { t } = useTranslation();

	const listBoxProps = {
		className,
		value,
		defaultValue: t('Укажите страну'),
		label: t('Укажите страну'),
		items: options,
		readonly,
		onChange,
		direction: 'bottomLeft' as const,
	};

	return (
		<ToggleFeatures
			name={'isAppRedesigned'}
			on={<ListBox {...listBoxProps} />}
			off={<ListBoxDeprecated {...listBoxProps} />}
		/>
	);
};
