import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Currency } from '../../model/types/currency';

import { ListBox } from '@/shared/ui/Popups';

interface CurrencySelectProps {
	className?: string;
	value?: Currency;
	onChange?: (value: Currency) => void;
	readonly?: boolean;
}

const options = [
	{ value: Currency.RUB, content: Currency.RUB },
	{ value: Currency.USD, content: Currency.USD },
	{ value: Currency.EUR, content: Currency.EUR },
];

export const CurrencySelect = (props: CurrencySelectProps): JSX.Element => {
	const { className, value, onChange, readonly } = props;

	const { t } = useTranslation();

	const onChangeHandler = useCallback(
		(value: string) => {
			onChange?.(value as Currency);
		},
		[onChange],
	);

	return (
		// todo: добавить label
		<ListBox
			className={className}
			defaultValue={t('Укажите валюту')}
			label={t('Укажите валюту')}
			value={value}
			items={options}
			readonly={readonly}
			onChange={onChangeHandler}
			direction={'topRight'}
		/>
	);

	// return (
	//     <Select
	//         className={classNames('', {}, [className])}
	//         label={t('Укажите валюту')}
	//         options={options}
	//         value={value}
	//         onChange={onChangeHandler}
	//         readonly={readonly}
	//     />
	// );
};
