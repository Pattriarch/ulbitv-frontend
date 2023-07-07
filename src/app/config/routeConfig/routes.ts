import { AppRoutes } from 'shared';

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.PROFILE]: '/profile/', // + :id
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLE_DETAILS]: '/articles/', // + :id
    // последний
    [AppRoutes.NOT_FOUND]: '*'
};
