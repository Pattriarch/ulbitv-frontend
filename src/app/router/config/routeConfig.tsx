import { AppRoutesProps } from '../types/router';

import { UserRole } from '@/entities/User';
import { AboutPage } from '@/pages/AboutPage';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { SettingsPage } from '@/pages/SettingsPage';
import {
	AppRoutes,
	getRouteArticleCreate,
	getRouteArticleEdit,
	getRouteArticleDetails,
	getRouteAdminPanel,
	getRouteArticles,
	getRouteAbout,
	getRouteMain,
	getRouteProfile,
	getRouteForbidden,
	getRouteSettings,
} from '@/shared/const/router';

/**
 * Конфигурация маршрутов приложения.
 *
 * Описывает все доступные маршруты в приложении и их свойства.
 * Каждый маршрут может иметь следующие свойства:
 * - `path`: Путь для маршрута.
 * - `element`: React компонент, который будет отображен при активации маршрута.
 * - `authOnly`: Флаг, указывающий, что маршрут доступен только для аутентифицированных пользователей.
 * - `roles`: Список ролей, которые имеют право на доступ к маршруту.
 *
 * @type {Record<AppRoutes, AppRoutesProps>}
 */
export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
	[AppRoutes.MAIN]: {
		path: getRouteMain(),
		element: <MainPage />,
	},
	[AppRoutes.SETTINGS]: {
		path: getRouteSettings(),
		element: <SettingsPage />,
	},
	[AppRoutes.ABOUT]: {
		path: getRouteAbout(),
		element: <AboutPage />,
	},
	[AppRoutes.ARTICLES]: {
		path: getRouteArticles(),
		element: <ArticlesPage />,
	},
	[AppRoutes.PROFILE]: {
		path: getRouteProfile(':id'),
		element: <ProfilePage />,
		authOnly: true,
	},
	[AppRoutes.ARTICLE_DETAILS]: {
		path: getRouteArticleDetails(':id'),
		element: <ArticleDetailsPage />,
		authOnly: true,
	},
	[AppRoutes.ARTICLE_CREATE]: {
		path: getRouteArticleCreate(),
		element: <ArticleEditPage />,
		authOnly: true,
	},
	[AppRoutes.ARTICLE_EDIT]: {
		path: getRouteArticleEdit(':id'),
		element: <ArticleEditPage />,
		authOnly: true,
	},
	[AppRoutes.ADMIN_PANEL]: {
		path: getRouteAdminPanel(),
		element: <AdminPanelPage />,
		authOnly: true,
		roles: [UserRole.MANAGER, UserRole.ADMIN],
	},
	[AppRoutes.FORBIDDEN]: {
		path: getRouteForbidden(),
		element: <ForbiddenPage />,
	},
	[AppRoutes.NOT_FOUND]: {
		path: '*',
		element: <NotFoundPage />,
	},
};
