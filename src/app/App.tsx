import React, { Suspense, useEffect } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppRouter } from './providers/AppRouter';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { useSelector } from 'react-redux';
import { getUserInited, userActions } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

const App = (): JSX.Element => {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={`${classNames('app', {}, [theme])}`}>
            <Suspense fallback={''}>
                <Navbar/>
                <div className={'content-page'}>
                    <Sidebar/>
                    {inited && <AppRouter/>}
                </div>
            </Suspense>
        </div>
    );
};

export default App;
