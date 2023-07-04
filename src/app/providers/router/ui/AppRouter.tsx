import React, { memo, Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'app/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

const AppRouter = (): JSX.Element => {
    const isAuth = useSelector(getUserAuthData);

    const routes = useMemo(() => {
        return Object.values(routeConfig).filter(route => {
            return !(route.authOnly && !isAuth);
        });
    }, [isAuth]);

    return (
        <Suspense fallback={<PageLoader/>}>
            <Routes>
                {routes.map(({ element, path }) => (
                    <Route
                        key={path}
                        path={path}
                        element={
                            <div className={'page-wrapper'}>
                                {element}
                            </div>
                        }
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default memo(AppRouter);
