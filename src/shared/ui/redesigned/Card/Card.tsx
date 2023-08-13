import { type HTMLAttributes, type ReactNode } from 'react';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

import cls from './Card.module.scss';

export type CardVariant = 'normal' | 'outlined' | 'light';
export type CardPadding = '0' | '8' | '16' | '24';
export type CardBorder = 'round' | 'partial' | 'normal';

/**
 * Свойства компонента Card.
 *
 * @interface
 * @property {string} [className] - Дополнительные стили компонента.
 * @property {CardVariant} [variant] - Тема карточки. Определяет визуальный стиль карточки.
 * @property {boolean} [max] - Флаг, указывающий на максимальный размер карточки.
 * @property {ReactNode} children - Содержимое карточки.
 * @property {CardPadding} [padding] - Отступы внутри карточки.
 * @property {CardBorder} [border] - Граница карточки.
 */
interface CardProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
	variant?: CardVariant;
	max?: boolean;
	children: ReactNode;
	padding?: CardPadding;
	border?: CardBorder;
}

const paddingClasses: Record<CardPadding, any> = {
	0: cls.p0,
	8: cls.p8,
	16: cls.p16,
	24: cls.p24,
};

const borderClasses: Record<CardBorder, any> = {
	round: cls.border_round,
	partial: cls.border_partial,
	normal: cls.border_normal,
};

/**
 * Компонент карточки с поддержкой различных стилей и свойств.
 *
 * @component
 * @param {CardProps} props - Свойства компонента.
 * @returns {JSX.Element} Компонент Card.
 */
export const Card = (props: CardProps): JSX.Element => {
	const {
		className,
		children,
		variant = 'normal',
		max,
		padding = '8',
		border = 'normal',
		...otherProps
	} = props;

	const mods: Mods = {
		[cls.max]: max,
	};

	return (
		<div
			className={classNames(cls.Card, mods, [
				className,
				cls[variant],
				paddingClasses[padding],
				borderClasses[border],
			])}
			{...otherProps}
		>
			{children}
		</div>
	);
};
