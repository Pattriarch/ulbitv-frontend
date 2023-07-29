import React, { type ButtonHTMLAttributes, memo, type ReactNode } from 'react';

import { classNames, type Mods } from '@/shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export type ButtonVariant = 'clear' | 'outline' | 'filled';

export type ButtonSize = 'm' | 'l' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	/**
	 * Тема кнопки. Отвечает за визуал (в рамке, без стилей, инвертированной теме приложения)
	 */
	variant?: ButtonVariant;
	/**
	 * Флаг, делающий кнопку квадратной
	 */
	square?: boolean;
	/**
	 * Размер кнопки по дизайн системе
	 */
	size?: ButtonSize;
	/**
	 * Флаг, отвечающий за работу кнопку
	 */
	disabled?: boolean;
	/**
	 * Флаг, отвечающий за установление кнопки на всю свободную ширину
	 */
	fullWidth?: boolean;
	/**
	 * Содержимое кнопки
	 */
	children?: ReactNode;
	addonLeft?: ReactNode;
	addonRight?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
	const {
		className,
		children,
		variant = 'outline',
		square = false,
		size = 'm',
		disabled,
		fullWidth,
		addonLeft,
		addonRight,
		...otherProps
	} = props;

	const mods: Mods = {
		[cls.square]: square,
		[cls.disabled]: disabled ?? false,
		[cls.fullWidth]: fullWidth,
		[cls.withAddon]: Boolean(addonLeft) || Boolean(addonRight),
	};

	return (
		<button
			type={'button'}
			className={classNames(cls.Button, mods, [
				className,
				cls[size],
				cls[variant],
			])}
			disabled={disabled}
			{...otherProps}
		>
			<div className={cls.addonLeft}>{addonLeft}</div>

			{children}
			<div className={cls.addonRight}>{addonRight}</div>
		</button>
	);
});
