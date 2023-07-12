import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Tabs.module.scss';
import { type ReactNode, useCallback } from 'react';
import { Card, CardTheme } from '../Card/Card';

export interface TabItem<T extends string> {
	value: T;
	content: ReactNode;
}

interface TabsProps<T extends string> {
	className?: string;
	tabs: TabItem<T>[];
	value: T;
	onTabClick: (tab: TabItem<T>) => void;
}

export const Tabs = <T extends string>(props: TabsProps<T>) => {
    const { className, tabs, value, onTabClick } = props;

    const handleClick = useCallback((tab: TabItem<T>) => {
        return () => {
            onTabClick(tab);
        };
    }, [onTabClick]);

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map(tab => (
                <Card
                    theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
                    key={tab.value}
                    className={cls.tab}
                    onClick={handleClick(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
};
