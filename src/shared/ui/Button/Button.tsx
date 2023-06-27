import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import React, { type ButtonHTMLAttributes, type FC } from 'react';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';

export enum ThemeButton {
	CLEAR = 'clear', // без рамок, заднего фона
	OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;

    return (
        <button
            type={'button'}
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
