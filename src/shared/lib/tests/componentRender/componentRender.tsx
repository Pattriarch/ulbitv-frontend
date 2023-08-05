import { type ReducersMapObject } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { type ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';

import { SetupApiStoreType } from '../setupApiStore/setupApiStore';

import { type StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
// eslint-disable-next-line ulbitv-fsd/layer-imports-validator
import { Theme, ThemeProvider } from '@/app/providers/ThemeProvider';
import i18nForTest from '@/shared/config/i18n/i18nForTest';

// eslint-disable-next-line ulbitv-fsd/layer-imports-validator
import '@/app/styles/index.scss';

export interface ComponentRenderOptions {
	providedStore?: SetupApiStoreType;
	route?: string;
	initialState?: DeepPartial<StateSchema>;
	asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
	theme?: Theme;
}

interface TestProviderProps {
	children: ReactNode;
	options?: ComponentRenderOptions;
}

export function TestProvider(props: TestProviderProps) {
	const { children, options = {} } = props;
	const {
		route = '/',
		providedStore,
		initialState,
		asyncReducers,
		theme = Theme.LIGHT,
	} = options;

	return (
		<MemoryRouter initialEntries={[route]}>
			<StoreProvider
				providedStore={providedStore}
				asyncReducers={asyncReducers}
				initialState={initialState}
			>
				<I18nextProvider i18n={i18nForTest}>
					<ThemeProvider initialTheme={theme}>
						<div className={`app ${theme}`}>{children}</div>
					</ThemeProvider>
				</I18nextProvider>
			</StoreProvider>
		</MemoryRouter>
	);
}

export function componentRender(
	component: ReactNode,
	options: ComponentRenderOptions = {},
) {
	return render(<TestProvider options={options}>{component}</TestProvider>);
}
