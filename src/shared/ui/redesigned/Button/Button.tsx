import React, {
	type ButtonHTMLAttributes,
	ForwardedRef,
	forwardRef,
	memo,
	type ReactNode,
} from 'react';

import { classNames, type Mods } from '@/shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export type ButtonVariant = 'clear' | 'outline' | 'filled';
export type ButtonColor = 'normal' | 'success' | 'error';
export type ButtonSize = 'm' | 'l' | 'xl';

/**
 * Свойства компонента Button.
 *
 * @interface
 * @property {string} [className] - Дополнительные стили компонента.
 * @property {ButtonVariant} [variant] - Тема кнопки. Определяет визуальный стиль кнопки.
 * @property {boolean} [square] - Флаг, указывающий на использование квадратной формы кнопки.
 * @property {ButtonSize} [size] - Размер кнопки согласно дизайн-системе.
 * @property {boolean} [disabled] - Флаг, указывающий на активное или неактивное состояние кнопки.
 * @property {boolean} [fullWidth] - Флаг, указывающий на то, должна ли кнопка занимать всю доступную ширину.
 * @property {ButtonColor} [color] - Цвет кнопки согласно дизайн-системе.
 * @property {ReactNode} [children] - Содержимое кнопки.
 * @property {ReactNode} [addonLeft] - Дополнительный контент слева от текста кнопки.
 * @property {ReactNode} [addonRight] - Дополнительный контент справа от текста кнопки.
 */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	variant?: ButtonVariant;
	square?: boolean;
	size?: ButtonSize;
	disabled?: boolean;
	fullWidth?: boolean;
	color?: ButtonColor;
	children?: ReactNode;
	addonLeft?: ReactNode;
	addonRight?: ReactNode;
}

/**
 * Компонент кнопки с поддержкой различных стилей и свойств.
 *
 * @component
 * @param {ButtonProps} props - Свойства компонента.
 * @param {React.Ref<HTMLButtonElement>} ref - Ref для кнопки.
 * @returns {JSX.Element} Компонент Button.
 */
export const Button = memo(
	forwardRef<HTMLButtonElement, ButtonProps>(
		(props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
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
				color = 'normal',
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
					ref={ref}
					className={classNames(cls.Button, mods, [
						className,
						cls[size],
						cls[variant],
						cls[color],
					])}
					disabled={disabled}
					{...otherProps}
				>
					<div className={cls.addonLeft}>{addonLeft}</div>

					{children}
					<div className={cls.addonRight}>{addonRight}</div>
				</button>
			);
		},
	),
);
