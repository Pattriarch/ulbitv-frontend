import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import React, { type ButtonHTMLAttributes, type FC } from 'react';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';

export enum ButtonTheme {
    CLEAR = 'clear', // без рамок, заднего фона
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background', // текст кнопки, как на фоне
    BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        square = false,
        size = ButtonSize.M,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true
    };

    return (
        <button
            type={'button'}
            className={classNames(cls.Button, mods, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
