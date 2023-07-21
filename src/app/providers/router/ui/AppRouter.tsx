import React, { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '@/app/router/config/routeConfig';
import { PageLoader } from '@/widgets/PageLoader';
import { RequireAuth } from '@/app/providers/router/ui/RequireAuth';
import { AppRoutesProps } from '@/app/router/types/router';

const AppRouter = (): JSX.Element => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <>
                {route.element}
            </>
        );

        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth roles={route.roles}>{element}</RequireAuth> : element}
            />
        );
    }, []);

    return (
        <Suspense fallback={<PageLoader/>}>
            <Routes>
                {Object.values(routeConfig).map(renderWithWrapper)}
            </Routes>
        </Suspense>
    );
};

export default memo(AppRouter);
