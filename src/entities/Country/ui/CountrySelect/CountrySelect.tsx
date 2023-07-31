import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Country } from '../../model/types/country';

import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ListBox } from '@/shared/ui/redesigned/Popups';

interface CountrySelectProps {
	className?: string;
	value?: Country;
	onChange?: (value: Country) => void;
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

export const CountrySelect = (props: CountrySelectProps): JSX.Element => {
	const { className, value, onChange, readonly } = props;

	const { t } = useTranslation();

	const onChangeHandler = useCallback(
		(value: string) => {
			onChange?.(value as Country);
		},
		[onChange],
	);

	const listBoxProps = {
		className,
		value,
		defaultValue: t('Укажите страну'),
		label: t('Укажите страну'),
		items: options,
		readonly,
		onChange,
		direction: 'topRight',
	};

	// todo: floating UI для позиционирования
	// todo: добавить label
	return (
		<ToggleFeatures
			name={'isAppRedesigned'}
			// @ts-expect-error todo fix it
			on={<ListBox {...listBoxProps} />}
			// @ts-expect-error todo fix it
			off={<ListBoxDeprecated {...listBoxProps} />}
		/>
	);
};
