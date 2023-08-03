import { screen } from '@testing-library/react';
import React from 'react';

import { ThemeContext } from '../../../../shared/context/ThemeContext';

import { Theme } from '@/shared/const/theme';
import { componentRender, ComponentRenderOptions } from '@/shared/lib/tests/componentRender/componentRender';

// Компонент, который использует контекст темы
function ComponentUsingTheme() {
	const { theme } = React.useContext(ThemeContext);

	return <div>{theme}</div>;
}

describe('app/providers/ThemeProvider', () => {
	it('Initialized theme should be in the context', () => {
		const initialTheme = Theme.DARK;
		const options: ComponentRenderOptions = { theme: initialTheme };

		componentRender(<ComponentUsingTheme />, options);

		expect(screen.getByText(initialTheme)).toBeInTheDocument();
	});

	it('Default theme was initialized', () => {
		const localStorageTheme = Theme.LIGHT;
		componentRender(<ComponentUsingTheme />);

		expect(screen.getByText(localStorageTheme)).toBeInTheDocument();
	});
});
