import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import {
	AppRoutes,
	getRouteArticleCreate,
	getRouteArticleEdit,
	getRouteArticleDetails,
	getRouteAdminPanel,
	getRouteArticles,
	getRouterAbout,
	getRouteMain,
	getRouterProfile,
	getRouteForbidden
} from '@/shared/const/router';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { UserRole } from '@/entities/User';
import { AppRoutesProps } from '../types/router';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
	[AppRoutes.MAIN]: {
		path: getRouteMain(),
		element: <MainPage/>
	},
	[AppRoutes.ABOUT]: {
		path: getRouterAbout(),
		element: <AboutPage/>
	},
	[AppRoutes.ARTICLES]: {
		path: getRouteArticles(),
		element: <ArticlesPage/>
	},
	[AppRoutes.PROFILE]: {
		path: getRouterProfile(':id'),
		element: <ProfilePage/>,
		authOnly: true
	},
	[AppRoutes.ARTICLE_DETAILS]: {
		path: getRouteArticleDetails(':id'),
		element: <ArticleDetailsPage/>,
		authOnly: true
	},
	[AppRoutes.ARTICLE_CREATE]: {
		path: getRouteArticleCreate(),
		element: <ArticleEditPage/>,
		authOnly: true
	},
	[AppRoutes.ARTICLE_EDIT]: {
		path: getRouteArticleEdit(':id'),
		element: <ArticleEditPage/>,
		authOnly: true
	},
	[AppRoutes.ADMIN_PANEL]: {
		path: getRouteAdminPanel(),
		element: <AdminPanelPage/>,
		authOnly: true,
		roles: [UserRole.MANAGER, UserRole.ADMIN]
	},
	[AppRoutes.FORBIDDEN]: {
		path: getRouteForbidden(),
		element: <ForbiddenPage/>
	},
	[AppRoutes.NOT_FOUND]: {
		path: '*',
		element: <NotFoundPage/>,
		authOnly: true
	}
};
