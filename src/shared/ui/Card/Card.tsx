import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';
import { type HTMLAttributes, type ReactNode } from 'react';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined'
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    theme?: CardTheme;
    max?: boolean;
    children: ReactNode;
}

export const Card = (props: CardProps): JSX.Element => {
    const {
        className,
        children,
        theme = CardTheme.NORMAL,
        max,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.max]: max
    };

    return (
        <div
            className={classNames(cls.Card, mods, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </div>
    );
};
