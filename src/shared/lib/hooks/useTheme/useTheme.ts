import { useContext } from 'react';

import { Theme } from '../../../const/theme';
import { ThemeContext } from '../../../context/ThemeContext';

interface UseThemeResult {
	toggleTheme: (saveAction: (theme: Theme) => void) => void;
	theme: Theme;
}

export function useTheme(): UseThemeResult {
	const { theme, setTheme } = useContext(ThemeContext);

	const toggleTheme = (saveAction: (theme: Theme) => void): void => {
		let newTheme: Theme;
		switch (theme) {
			case Theme.DARK:
				newTheme = Theme.LIGHT;
				break;
			case Theme.LIGHT:
				newTheme = Theme.TAN;
				break;
			case Theme.TAN:
				newTheme = Theme.LAKE;
				break;
			case Theme.LAKE:
				newTheme = Theme.DARK;
				break;
			default:
				newTheme = Theme.LIGHT;
		}
		setTheme?.(newTheme);
		document.body.className = newTheme;
		saveAction?.(newTheme);
	};

	return {
		toggleTheme,
		theme: theme ?? Theme.LIGHT,
	};
}
