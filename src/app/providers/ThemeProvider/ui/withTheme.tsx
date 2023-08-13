import React from 'react';

import ThemeProvider from './ThemeProvider';

import { useJsonSettings } from '@/entities/User';

/**
 * HOC (Higher-Order Component) `withTheme`.
 *
 * Обеспечивает компонент доступом к настройкам темы.
 * Этот HOC использует настройки пользователя для получения текущей темы и предоставляет ее
 * `ThemeProvider`, чтобы обеспечивать дочерние компоненты соответствующей темой.
 *
 * @param {React.ComponentType} Component - Компонент, который необходимо обернуть.
 * @returns {Function} Компонент, обернутый в `ThemeProvider`.
 */
export const withTheme = (Component: React.ComponentType) => {
	return () => {
		const { theme: defaultTheme } = useJsonSettings();
		return (
			<ThemeProvider initialTheme={defaultTheme}>
				<Component />
			</ThemeProvider>
		);
	};
};
