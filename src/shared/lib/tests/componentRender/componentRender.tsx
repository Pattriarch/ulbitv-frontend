import { type ReactNode } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18nForTest from 'shared/config/i18n/i18nForTest';

export interface ComponentRenderOptions {
    route?: string;
}

export function componentRender(component: ReactNode, options: ComponentRenderOptions = {}): ReactNode {
    const {
        route = '/'
    } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18nForTest}>
                {component}
            </I18nextProvider>
        </MemoryRouter>
    );
}
