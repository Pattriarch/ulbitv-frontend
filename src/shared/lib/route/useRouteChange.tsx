import { useEffect, useState } from 'react';
import { matchPath, useLocation } from 'react-router-dom';

import { AppRouteByPathPattern, AppRoutes } from '@/shared/const/router';
import { useAppEffect } from '@/shared/lib/hooks/useAppEffect/useAppEffect';

export function useRouteChange() {
	const location = useLocation();
	const [appRoute, setAppRoute] = useState<AppRoutes>(AppRoutes.MAIN);

	useAppEffect(() => {
		Object.entries(AppRouteByPathPattern).forEach(([pattern, route]) => {
			if (matchPath(pattern, location.pathname)) {
				setAppRoute(route);
			}
		});
	}, [location.pathname]);

	return appRoute;
}
