import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { Country } from '../../model/types/country';
import { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

interface CountrySelectProps {
	className?: string;
	value?: Country;
	onChange?: (value: Country) => void;
	readonly?: boolean;
}

const options = [
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Ukraine, content: Country.Ukraine },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Armenia, content: Country.Armenia }
];

export const CountrySelect = (props: CountrySelectProps): JSX.Element => {
    const {
        className,
        value,
        onChange,
        readonly
    } = props;

    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Укажите страну')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
};