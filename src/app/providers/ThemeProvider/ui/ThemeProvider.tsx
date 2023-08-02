import React, { type ReactNode, useEffect, useMemo, useState } from 'react';

import { ThemeContext } from '../../../../shared/context/ThemeContext';

import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localStorage';
import { Theme } from '@/shared/const/theme';
import { useAppEffect } from '@/shared/lib/hooks/useAppEffect/useAppEffect';

interface ThemeProviderProps {
	initialTheme?: Theme;
	children: ReactNode;
}

const fallbackTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;

const ThemeProvider = (props: ThemeProviderProps) => {
	const { initialTheme, children } = props;
	const [isThemeInited, setThemeInited] = useState(false);
	const [theme, setTheme] = useState<Theme>(
		initialTheme || fallbackTheme || Theme.LIGHT,
	);

	useAppEffect(() => {
		if (!isThemeInited && initialTheme) {
			setTheme(initialTheme);
			setThemeInited(true);
		}
	}, [initialTheme, isThemeInited]);

	useAppEffect(() => {
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
