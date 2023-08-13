import React, { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routeConfig } from '../../config/routeConfig';
import { AppRoutesProps } from '../../types/router';

import { RequireAuth } from './RequireAuth';

import { PageLoader } from '@/widgets/PageLoader';

/**
 * Компонент `AppRouter` отвечает за рендеринг маршрутов приложения на основе конфигурации маршрутов.
 * Он использует React Router v6 для управления маршрутизацией. Компонент также обеспечивает аутентификацию
 * для маршрутов, которые требуют аутентификацию, используя компонент `RequireAuth`.
 *
 * Для маршрутов, которые требуют аутентификацию, необходимо указать свойство `authOnly` в конфигурации маршрута.
 * Также можно указать роли, которые имеют доступ к этому маршруту, используя свойство `roles`.
 *
 * @component
 * @example
 * // Пример использования в вашем приложении:
 * <AppRouter />
 *
 * @returns {JSX.Element} Возвращает компонент с маршрутами на основе конфигурации маршрутов.
 */
const AppRouter = (): JSX.Element => {
	const renderWithWrapper = useCallback((route: AppRoutesProps) => {
		const element = <>{route.element}</>;

		return (
			<Route
				key={route.path}
				path={route.path}
				element={
					route.authOnly ? (
						<RequireAuth roles={route.roles}>{element}</RequireAuth>
					) : (
						element
					)
				}
			/>
		);
	}, []);

	return (
		<Suspense fallback={<PageLoader />}>
			<Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
		</Suspense>
	);
};

export default memo(AppRouter);
