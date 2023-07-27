import React, { type ReactNode, useEffect, useMemo, useState } from 'react';

import { ThemeContext } from '../../../../shared/context/ThemeContext';

import { useJsonSettings } from '@/entities/User';
import { Theme } from '@/shared/const/theme';

interface ThemeProviderProps {
	initialTheme?: Theme;
	children: ReactNode;
}

const ThemeProvider = (props: ThemeProviderProps) => {
	const { initialTheme, children } = props;
	const { theme: defaultTheme = Theme.LIGHT } = useJsonSettings();
	const [isThemeInited, setThemeInited] = useState(false);
	const [theme, setTheme] = useState<Theme>(initialTheme ?? defaultTheme);

	useEffect(() => {
		if (!isThemeInited) {
			setTheme(defaultTheme);
			setThemeInited(true);
		}
	}, [defaultTheme, isThemeInited]);

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
