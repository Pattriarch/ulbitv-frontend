import {
	DetailedHTMLProps,
	HTMLAttributes,
	memo,
	type ReactNode,
	type RefObject,
} from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end' | 'stretch';
export type FlexDirection = 'row' | 'column';
export type FlexWrap = 'nowrap' | 'wrap';
export type FlexGap = '4' | '8' | '16' | '24' | '32';

const justifyClasses: Record<FlexJustify, string> = {
	start: cls.justifyStart,
	center: cls.justifyCenter,
	end: cls.justifyEnd,
	between: cls.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
	start: cls.alignStart,
	center: cls.alignCenter,
	end: cls.alignEnd,
	stretch: cls.alignStretch,
};

const directionClasses: Record<FlexDirection, string> = {
	row: cls.directionRow,
	column: cls.directionColumn,
};

const gapClasses: Record<FlexGap, any> = {
	4: cls.gap4,
	8: cls.gap8,
	16: cls.gap16,
	24: cls.gap24,
	32: cls.gap32,
};

export type FlexTag = 'div' | 'nav';

type DivProps = DetailedHTMLProps<
	HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
>;

/**
 * Свойства компонента Flex.
 *
 * @interface
 * @property {RefObject<HTMLDivElement>} [ref] - Ссылка на DOM-элемент, используемая для доступа к нему через RefObject.
 * @property {string} [className] - Дополнительные стили компонента.
 * @property {ReactNode} children - Дочерние элементы, которые будут отображаться внутри компонента.
 * @property {FlexJustify} [justify] - Выравнивание элементов по горизонтали (для контейнера Flex).
 * @property {FlexAlign} [align] - Выравнивание элементов по вертикали (для контейнера Flex).
 * @property {FlexDirection} [direction] - Направление элементов (расположение по горизонтали и вертикали) (для контейнера Flex).
 * @property {FlexGap} [gap] - Расстояние между элементами (для контейнера Flex).
 * @property {FlexWrap} [wrap] - Разрешение на перенос элементов на следующую строку (для контейнера Flex).
 * @property {boolean} [max] - Флаг, указывающий на максимальный размер Flex-контейнера.
 * @property {FlexTag} [tag] - HTML-тег, который будет использоваться для Flex-контейнера.
 */
export interface FlexProps extends DivProps {
	ref?: RefObject<HTMLDivElement>;
	className?: string;
	children: ReactNode;
	justify?: FlexJustify;
	align?: FlexAlign;
	direction?: FlexDirection;
	gap?: FlexGap;
	wrap?: FlexWrap;
	max?: boolean;
	tag?: FlexTag;
}

/**
 * Компонент Flex предоставляет удобные способы управления расположением и выравниванием элементов.
 *
 * @component
 * @param {FlexProps} props - Свойства компонента.
 * @returns {JSX.Element} Компонент Flex.
 */
export const Flex = memo((props: FlexProps) => {
	const {
		className,
		children,
		justify = 'start',
		align = 'center',
		direction = 'row',
		tag = 'div',
		wrap = 'nowrap',
		gap,
		max,
		...otherProps
	} = props;

	const classes = [
		className,
		justifyClasses[justify],
		alignClasses[align],
		directionClasses[direction],
		cls[wrap],
		gap && gapClasses[gap],
	];

	const mods = {
		[cls.max]: max,
	};

	switch (tag) {
		case 'div':
			return (
				<div
					className={classNames(cls.Flex, mods, classes)}
					{...otherProps}
				>
					{children}
				</div>
			);
		case 'nav':
			return (
				<nav
					className={classNames(cls.Flex, mods, classes)}
					{...otherProps}
				>
					{children}
				</nav>
			);
	}
});
