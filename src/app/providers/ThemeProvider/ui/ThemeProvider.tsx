import React, { type ReactNode, useEffect, useMemo, useState } from 'react';

import { ThemeContext } from '../../../../shared/context/ThemeContext';

import { useJsonSettings } from '@/entities/User';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localStorage';
import { Theme } from '@/shared/const/theme';

interface ThemeProviderProps {
	initialTheme?: Theme;
	children: ReactNode;
}

const fallbackTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;

const ThemeProvider = (props: ThemeProviderProps) => {
	const { initialTheme, children } = props;
	const { theme: defaultTheme } = useJsonSettings();
	const [isThemeInited, setThemeInited] = useState(false);
	const [theme, setTheme] = useState<Theme>(
		initialTheme || fallbackTheme || Theme.LIGHT,
	);

	useEffect(() => {
		if (!isThemeInited && defaultTheme) {
			setTheme(defaultTheme);
			setThemeInited(true);
		}
	}, [defaultTheme, isThemeInited]);

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
	}, [theme]);

	const defaultProps = useMemo(
		() => ({
			theme,
			setTheme,
		}),
		[theme],
	);

	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
