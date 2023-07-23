import { type ChangeEvent, useMemo } from 'react';

import { classNames, type Mods } from '@/shared/lib/classNames/classNames';
import { typedMemo } from '@/shared/types';

import cls from './Select.module.scss';

export interface SelectOption<T extends string> {
	value: T;
	content: string;
}

interface SelectProps<T extends string> {
	className?: string;
	label?: string;
	options?: SelectOption<T>[];
	value?: T;
	onChange?: (value: T) => void;
	readonly?: boolean;
}

export const Select = typedMemo(<T extends string>(props: SelectProps<T>): JSX.Element => {
    const {
        className,
        label,
        options,
        onChange,
        value,
        readonly
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
    };

    const optionsList = useMemo(() => {
        return options?.map((selectOption) => (
            <option
                className={cls.option}
                value={selectOption.value}
                key={selectOption.value}
            >{selectOption.content}</option>
        ));
    }, [options]);

    const mods: Mods = {
        [cls.readonly]: readonly
    };

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && <span className={cls.label}>
                {`${label}>`}
            </span>}
            <select
                disabled={readonly}
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
            >
                {optionsList}
            </select>
        </div>
    );
});
