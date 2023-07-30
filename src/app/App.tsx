import React, { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { AppRouter } from './providers/AppRouter';

import { getUserInited, initAuthData } from '@/entities/User';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Navbar } from '@/widgets/Navbar';
import { PageLoader } from '@/widgets/PageLoader';
import { Sidebar } from '@/widgets/Sidebar';

const App = (): JSX.Element => {
	const { theme } = useTheme();
	const dispatch = useAppDispatch();
	const inited = useSelector(getUserInited);

	useEffect(() => {
		if (!inited) {
			void dispatch(initAuthData());
		}
	}, [inited, dispatch]);

	if (!inited) {
		return <PageLoader />;
	}

	return (
		<ToggleFeatures
			name={'isAppRedesigned'}
			off={
				<div id={'app'} className={`${classNames('app', {}, [theme])}`}>
					<Suspense fallback={''}>
						<Navbar />
						<div className={'content-page'}>
							<Sidebar />
							{inited && <AppRouter />}
						</div>
					</Suspense>
				</div>
			}
			on={
				<div
					id={'app'}
					className={`${classNames('app_redesigned', {}, [theme])}`}
				>
					<Suspense fallback={''}>
						<MainLayout
							header={<Navbar />}
							content={<AppRouter />}
							sidebar={<Sidebar />}
						/>
					</Suspense>
				</div>
			}
		/>
	);
};

export default App;
