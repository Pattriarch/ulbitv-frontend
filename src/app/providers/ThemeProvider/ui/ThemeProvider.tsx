import React, { type ReactNode, useMemo, useState } from 'react';

import { ThemeContext } from '../../../../shared/context/ThemeContext';

import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localStorage';
import { Theme } from '@/shared/const/theme';
import { useAppEffect } from '@/shared/lib/hooks/useAppEffect/useAppEffect';

interface ThemeProviderProps {
	/** Начальная тема, которая будет использоваться в приложении. */
	initialTheme?: Theme;

	/**  Дочерние элементы, которые будут обернуты в контекст темы. */
	children: ReactNode;
}

const fallbackTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;

/**
 * Компонент `ThemeProvider`.
 *
 * Обеспечивает потомков доступом к текущей теме и функции для ее изменения через контекст.
 * При первой загрузке тема берется из переданных начальных свойств,
 * если они не переданы, тогда используется значение из локального хранилища,
 * или по умолчанию используется светлая тема.
 *
 * @param {ThemeProviderProps} props - Свойства компонента.
 * @returns {JSX.Element} Элемент провайдера темы, обертывающий `children`.
 */
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
