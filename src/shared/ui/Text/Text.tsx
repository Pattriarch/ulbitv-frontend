import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';
import { memo, useCallback } from 'react';

export enum TextTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    ERROR = 'error'
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center'
}

export enum TextSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}

export type TextTag = 'p' | 'h1' | 'h2' | 'h3';

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
    tag?: TextTag;
}

export const Text = memo((props: TextProps): JSX.Element => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
        tag = 'p'
    } = props;

    const classes = [
        className,
        cls[theme],
        cls[align],
        cls[size]
    ];

    const getTitle = useCallback(() => {
        switch (tag) {
            case 'p':
                return <p className={cls.title}>{title}</p>;
            case 'h1':
                return <h1 className={cls.title}>{title}</h1>;
            case 'h2':
                return <h2 className={cls.title}>{title}</h2>;
            case 'h3':
                return <h3 className={cls.title}>{title}</h3>;
        }
    }, [tag, title]);

    return (
        <div className={classNames(cls.Text, {}, classes)}>
            {title && getTitle()}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
