import { type ReactNode, useCallback } from 'react';

import { Card } from '../Card/Card';
import { Flex, FlexDirection } from '../Stack/Flex/Flex';

import { classNames } from '@/shared/lib/classNames/classNames';
import { typedMemo } from '@/shared/types';

import cls from './Tabs.module.scss';

export interface TabItem<T extends string> {
	/**
	 * Значение вкладки.
	 */
	value: T;

	/**
	 * Содержимое вкладки.
	 */
	content: ReactNode;
}

interface TabsProps<T extends string> {
	/**
	 * Дополнительные стили компонента.
	 */
	className?: string;

	/**
	 * Вкладки.
	 */
	tabs: TabItem<T>[];

	/**
	 * Текущее выбранное значение вкладки.
	 */
	value: T;

	/**
	 * Callback-функция, вызываемая при клике на вкладку.
	 */
	onTabClick: (tab: TabItem<T>) => void;

	/**
	 * Направление отображения вкладок (горизонтальное или вертикальное).
	 */
	direction?: FlexDirection;
}

/**
 * Компонент Tabs представляет набор вкладок с содержимым.
 *
 * @component
 * @param {TabsProps<T>} props - Свойства компонента.
 * @returns {JSX.Element} Компонент Tabs.
 */
export const Tabs = typedMemo(<T extends string>(props: TabsProps<T>) => {
	const { className, tabs, value, onTabClick, direction = 'row' } = props;

	const handleClick = useCallback(
		(tab: TabItem<T>) => {
			return () => {
				onTabClick(tab);
			};
		},
		[onTabClick],
	);

	return (
		<Flex
			direction={direction}
			gap={'8'}
			align={'start'}
			className={classNames(cls.Tabs, {}, [className])}
		>
			{tabs.map((tab) => {
				const isSelected = tab.value === value;
				return (
					<Card
						data-testid={`Card.${tab.value}`}
						variant={tab.value === value ? 'light' : 'normal'}
						key={tab.value}
						className={classNames(cls.tab, {
							[cls.selected]: isSelected,
						})}
						onClick={handleClick(tab)}
						border={'round'}
					>
						{tab.content}
					</Card>
				);
			})}
		</Flex>
	);
});
