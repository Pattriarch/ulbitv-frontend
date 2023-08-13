import React, { memo, type TextareaHTMLAttributes, useRef } from 'react';

import { classNames, type Mods } from '@/shared/lib/classNames/classNames';
import { useAppEffect } from '@/shared/lib/hooks/useAppEffect/useAppEffect';

import cls from './Textarea.module.scss';

type HTMLTextareaProps = Omit<
	TextareaHTMLAttributes<HTMLTextAreaElement>,
	'value' | 'onChange' | 'readOnly'
>;

type TextareaVariant = 'normal' | 'outlined';

interface TextareaProps extends HTMLTextareaProps {
	/**
	 * Дополнительные стили компонента.
	 */
	className?: string;

	/**
	 * Вариант стиля текстового поля.
	 */
	variant?: TextareaVariant;

	/**
	 * Текущее значение текстового поля.
	 */
	value?: string | number;

	/**
	 * Callback-функция, вызываемая при изменении значения текстового поля.
	 */
	onChange?: (value: string) => void;

	/**
	 * Флаг, указывающий, что текстовое поле получает фокус при отображении.
	 */
	autofocus?: boolean;

	/**
	 * Флаг, указывающий, что текстовое поле только для чтения.
	 */
	readonly?: boolean;
}

/**
 * Компонент Textarea представляет текстовое поле для ввода многострочного текста с заданными свойствами.
 *
 * @component
 * @param {TextareaProps} props - Свойства компонента.
 * @returns {JSX.Element} Компонент Textarea.
 */
export const Textarea = memo((props: TextareaProps) => {
	const {
		className,
		variant = 'normal',
		value,
		onChange,
		placeholder,
		autofocus,
		readonly,
		...otherProps
	} = props;

	const ref = useRef<HTMLTextAreaElement>(null);

	useAppEffect(() => {
		if (autofocus) {
			ref?.current?.focus();
		}
	}, [autofocus]);

	const onChangeHandler = (
		e: React.ChangeEvent<HTMLTextAreaElement>,
	): void => {
		onChange?.(e.target.value);
	};

	const mods: Mods = {
		[cls.readonly]: readonly,
	};

	return (
		<div
			className={classNames(cls.TextareaWrapper, mods, [
				className,
				cls[variant],
			])}
		>
			<textarea
				ref={ref}
				value={value}
				onChange={onChangeHandler}
				className={cls.textarea}
				readOnly={readonly}
				{...otherProps}
			/>
		</div>
	);
});
