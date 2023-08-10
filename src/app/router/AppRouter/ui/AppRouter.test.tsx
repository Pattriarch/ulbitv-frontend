import { screen, waitFor } from '@testing-library/react';

import AppRouter from './AppRouter';

import { UserRole } from '@/entities/User';
import {
	getRouteAbout,
	getRouteAdminPanel,
	getRouteProfile,
} from '@/shared/const/router';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';

describe('app/router/AppRouter', () => {
	beforeAll(() => {
		Object.defineProperty(window, 'matchMedia', {
			writable: true,
			value: jest.fn().mockImplementation((query) => ({
				matches: false,
				media: query,
				onchange: null,
				addListener: jest.fn(), // Deprecated
				removeListener: jest.fn(), // Deprecated
				addEventListener: jest.fn(),
				removeEventListener: jest.fn(),
				dispatchEvent: jest.fn(),
			})),
		});
	});

	test('Страница должна отрендериться', async () => {
		componentRender(<AppRouter />, {
			route: getRouteAbout(),
		});

		const page = await screen.findByTestId('AboutPage');
		expect(page).toBeInTheDocument();
	});

	test('Страница не найдена', async () => {
		componentRender(<AppRouter />, {
			route: '/asdasdasdasd',
		});

		const page = await screen.findByTestId('NotFoundPage');
		expect(page).toBeInTheDocument();
	});

	test('Редирект неавторизованного пользователя на главную', async () => {
		componentRender(<AppRouter />, {
			route: getRouteProfile('1'),
		});

		const page = await screen.findByTestId('MainPage');
		expect(page).toBeInTheDocument();
	});

	test('Доступ к закрытой странице для авторизованного пользователя', async () => {
		componentRender(<AppRouter />, {
			route: getRouteProfile('1'),
			initialState: {
				user: {
					_inited: true,
					authData: {},
				},
			},
		});

		await waitFor(() =>
			expect(screen.queryByTestId('PageLoader')).not.toBeInTheDocument(),
		);
		const page = await screen.findByTestId('ProfilePage');
		expect(page).toBeInTheDocument();
	});

	test('Доступ запрещен (отсутствует роль)', async () => {
		componentRender(<AppRouter />, {
			route: getRouteAdminPanel(),
			initialState: {
				user: {
					_inited: true,
					authData: {},
				},
			},
		});

		const page = await screen.findByTestId('ForbiddenPage');
		expect(page).toBeInTheDocument();
	});

	test('Доступ разрешен (присутствует роль)', async () => {
		componentRender(<AppRouter />, {
			route: getRouteAdminPanel(),
			initialState: {
				user: {
					_inited: true,
					authData: {
						roles: [UserRole.ADMIN],
					},
				},
			},
		});

		const page = await screen.findByTestId('AdminPanelPage');
		expect(page).toBeInTheDocument();
	});
});
