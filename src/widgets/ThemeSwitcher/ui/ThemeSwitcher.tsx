import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher =
    ({ className }: ThemeSwitcherProps): JSX.Element => {
        const { theme, toggleTheme } = useTheme();

        return (
            <button
                type={'button'}
                className={classNames('', {}, [className])}
                onClick={toggleTheme}
            >
                {theme === Theme.DARK ? <DarkIcon/> : <LightIcon/>}
            </button>
        );
    };
