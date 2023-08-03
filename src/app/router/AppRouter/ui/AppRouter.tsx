import React, { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routeConfig } from '../../config/routeConfig';
import { AppRoutesProps } from '../../types/router';

import { RequireAuth } from './RequireAuth';

import { PageLoader } from '@/widgets/PageLoader';

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
