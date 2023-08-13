import React, {
	type InputHTMLAttributes,
	memo,
	ReactNode,
	useRef,
	useState,
} from 'react';

import { HStack } from '../Stack';
import { Text } from '../Text';

import { classNames, type Mods } from '@/shared/lib/classNames/classNames';
import { useAppEffect } from '@/shared/lib/hooks/useAppEffect/useAppEffect';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'value' | 'onChange' | 'readOnly' | 'size'
>;

type InputVariant = 'normal' | 'outlined';

type InputSize = 's' | 'm' | 'l';

interface InputProps extends HTMLInputProps {
	/**
	 * Дополнительные стили компонента.
	 */
	className?: string;

	/**
	 * Вариант стиля ввода.
	 */
	variant?: InputVariant;

	/**
	 * Размер ввода согласно дизайн-системе.
	 */
	size?: InputSize;

	/**
	 * Текущее значение ввода.
	 */
	value?: string | number;

	/**
	 * Текст метки для ввода.
	 */
	label?: string;

	/**
	 * Callback-функция, вызываемая при изменении значения ввода.
	 */
	onChange?: (value: string) => void;

	/**
	 * Флаг, указывающий, что ввод получает фокус при отображении.
	 */
	autofocus?: boolean;

	/**
	 * Флаг, указывающий, что ввод только для чтения.
	 */
	readonly?: boolean;

	/**
	 * Дополнительный контент слева от поля ввода.
	 */
	addonLeft?: ReactNode;

	/**
	 * Дополнительный контент справа от поля ввода.
	 */
	addonRight?: ReactNode;
}

/**
 * Компонент Input представляет поле ввода текста или числа с различными настройками стиля и функциональности.
 *
 * @component
 * @param {InputProps} props - Свойства компонента.
 * @returns {JSX.Element} Компонент Input.
 */
export const Input = memo((props: InputProps): JSX.Element => {
	const {
		className,
		variant = 'normal',
		value,
		label,
		size = 'm',
		onChange,
		type = 'text',
		placeholder,
		autofocus,
		readonly,
		addonLeft,
		addonRight,
		...otherProps
	} = props;

	const ref = useRef<HTMLInputElement>(null);
	const [isFocused, setIsFocused] = useState(false);

	useAppEffect(() => {
		if (autofocus) {
			setIsFocused(true);
			ref?.current?.focus();
		}
	}, [autofocus]);

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
		onChange?.(e.target.value);
	};

	const onBlur = (): void => {
		setIsFocused(false);
	};

	const onFocus = (): void => {
		setIsFocused(true);
	};

	const mods: Mods = {
		[cls.readonly]: readonly,
		[cls.focused]: isFocused,
		[cls.withAddonLeft]: Boolean(addonLeft),
		[cls.withAddonRight]: Boolean(addonRight),
	};

	const input = (
		<div
			className={classNames(cls.InputWrapper, mods, [
				className,
				cls[variant],
				cls[size],
			])}
		>
			<div className={cls.addonLeft}>{addonLeft}</div>
			<input
				ref={ref}
				type={type}
				value={value}
				onChange={onChangeHandler}
				className={cls.input}
				onFocus={onFocus}
				onBlur={onBlur}
				placeholder={placeholder}
				readOnly={readonly}
				{...otherProps}
			/>
			<div className={cls.addonRight}>{addonRight}</div>
		</div>
	);

	if (label) {
		return (
			<HStack max gap={'8'}>
				<Text
					className={classNames('', { [cls.readonly]: readonly })}
					text={label}
				/>
				{input}
			</HStack>
		);
	}

	return input;
});
