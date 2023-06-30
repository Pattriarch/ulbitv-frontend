import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';
import { useContext } from 'react';

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = (): void => {
        if (setTheme != null) {
            const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
            setTheme(newTheme);
            localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
        }
    };

    return {
        toggleTheme,
        theme: theme ?? Theme.LIGHT
    };
}
