import { type ReactNode, useCallback } from 'react';

import { Card } from '../Card/Card';
import { Flex, FlexDirection } from '../Stack/Flex/Flex';

import { classNames } from '@/shared/lib/classNames/classNames';
import { typedMemo } from '@/shared/types';

import cls from './Tabs.module.scss';

export interface TabItem<T extends string> {
	value: T;
	content: ReactNode;
}

interface TabsProps<T extends string> {
	className?: string;
	tabs: TabItem<T>[];
	value: T;
	onTabClick: (tab: TabItem<T>) => void;
	direction?: FlexDirection;
}

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
