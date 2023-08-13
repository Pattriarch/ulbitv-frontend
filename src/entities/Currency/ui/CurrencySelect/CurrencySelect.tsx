import { useTranslation } from 'react-i18next';

import { Currency } from '../../model/types/currency';

import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ListBox } from '@/shared/ui/redesigned/Popups';

interface CurrencySelectProps {
	/**
	 * Дополнительные стили компонента.
	 */
	className?: string;

	/**
	 * Текущее значение выбранной валюты.
	 */
	value?: Currency;

	/**
	 * Callback-функция, вызываемая при изменении выбранной валюты.
	 * @param {Currency} value - Новое значение выбранной валюты.
	 * @returns {void}
	 */
	onChange?: (value: Currency) => void;

	/**
	 * Указывает, можно ли редактировать выбранную валюту.
	 */
	readonly?: boolean;
}

const options = [
	{ value: Currency.RUB, content: Currency.RUB },
	{ value: Currency.USD, content: Currency.USD },
	{ value: Currency.EUR, content: Currency.EUR },
];

/**
 * Компонент выпадающего списка для выбора валюты.
 *
 * @component
 * @param {CurrencySelectProps} props - Пропсы компонента `CurrencySelect`.
 * @returns {JSX.Element} Элемент выпадающего списка для выбора валюты.
 */
export const CurrencySelect = (props: CurrencySelectProps): JSX.Element => {
	const { className, value, onChange, readonly } = props;

	const { t } = useTranslation();

	const listBoxProps = {
		className,
		value,
		defaultValue: t('Укажите валюту'),
		label: t('Укажите валюту'),
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
