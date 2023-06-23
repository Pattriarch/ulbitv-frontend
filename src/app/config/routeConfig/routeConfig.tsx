import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import { type RouteProps } from 'react-router-dom'
import { RoutePath } from './routes'
import { AppRoutes } from 'shared'
import { NotFoundPage } from 'pages/NotFoundPage'

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage/>
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage/>
    }
}
