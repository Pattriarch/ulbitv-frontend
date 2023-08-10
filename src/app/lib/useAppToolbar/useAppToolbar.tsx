import { ReactElement } from 'react';

import { AppRoutes } from '@/shared/const/router';
import { useRouteChange } from '@/shared/lib/route/useRouteChange';
import { ScrollToolbar } from '@/widgets/ScrollToolbar';

/**
 * Хук для получения бокового тулбара в зависимости от текущего маршрута.
 *
 * Возвращает боковой тулбар (если есть) для текущего маршрута.
 *
 * @returns {ReactElement | undefined} Панель инструментов для текущего маршрута или undefined, если таковой нет.
 */
export function useAppToolbar() {
	const currentRoute = useRouteChange();

	const toolbarByAppRoute: OptionalRecord<AppRoutes, ReactElement> = {
		[AppRoutes.ARTICLES]: <ScrollToolbar />,
		[AppRoutes.ARTICLE_DETAILS]: <ScrollToolbar />,
	};

	return toolbarByAppRoute[currentRoute];
}
