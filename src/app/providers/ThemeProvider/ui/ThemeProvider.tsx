import React, { type ReactNode, useMemo, useState } from 'react';
import { ThemeContext } from '../../../../shared/context/ThemeContext';
import { Theme } from '@/shared';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localStorage';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
	initialTheme?: Theme;
	children: ReactNode;
}

const ThemeProvider = (props: ThemeProviderProps) => {
	const {
		initialTheme,
		children
	} = props;
	const [theme, setTheme] = useState<Theme>(initialTheme ?? defaultTheme);

	const defaultProps = useMemo(() => ({
		theme,
		setTheme
	}), [theme]);

	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
