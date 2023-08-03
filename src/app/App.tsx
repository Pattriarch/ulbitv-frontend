import React, { memo, Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useAppToolbar } from './lib/useAppToolbar';
import { AppRouter } from './router/AppRouter';
import { withTheme } from './providers/ThemeProvider/ui/withTheme';

import { getUserInited, initAuthData } from '@/entities/User';
import { AppLoaderLayout } from '@/shared/layouts/AppLoaderLayout';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Navbar } from '@/widgets/Navbar';
import { PageLoader } from '@/widgets/PageLoader';
import { Sidebar } from '@/widgets/Sidebar';
import { useAppEffect } from '@/shared/lib/hooks/useAppEffect/useAppEffect';

const App = memo((): JSX.Element => {
	const { theme } = useTheme();
	const dispatch = useAppDispatch();
	const inited = useSelector(getUserInited);
	const toolbar = useAppToolbar();

	useAppEffect(() => {
		if (!inited) {
			void dispatch(initAuthData());
		}
	}, [inited, dispatch]);

	if (!inited) {
		return (
			<ToggleFeatures
				name={'isAppRedesigned'}
				on={
					<div
						id={'app'}
						className={`${classNames('app_redesigned', {}, [
							theme,
						])}`}
					>
						<AppLoaderLayout />
					</div>
				}
				off={<PageLoader />}
			/>
		);
	}

	return (
		<ToggleFeatures
			name={'isAppRedesigned'}
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
							toolbar={toolbar}
						/>
					</Suspense>
				</div>
			}
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
		/>
	);
});

export default withTheme(App);
