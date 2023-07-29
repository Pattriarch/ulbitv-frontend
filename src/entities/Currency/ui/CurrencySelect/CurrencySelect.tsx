import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';

import { Currency } from '../../model/types/currency';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';

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

	const listBoxProps = {
		className,
		value,
		defaultValue: 'Укажите валюту',
		label: 'Укажите валюту',
		items: options,
		readonly,
		onChange,
		direction: 'topRight' as const,
	};

	return (
		<ToggleFeatures
			name={'isAppRedesigned'}
			// @ts-ignore todo fix it
			on={<ListBox {...listBoxProps} />}
			// @ts-ignore todo fix it
			off={<ListBoxDeprecated {...listBoxProps} />}
		/>
	);
};
