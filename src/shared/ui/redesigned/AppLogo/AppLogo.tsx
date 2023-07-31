import { memo } from 'react';

import { AppLink } from '../AppLink';
import { HStack } from '../Stack';

import AppSvg from '@/shared/assets/icons/app-image.svg';
import { getRouteMain } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './AppLogo.module.scss';

interface AppLogoProps {
	className?: string;
	size?: number;
}

export const AppLogo = memo((props: AppLogoProps) => {
	const { className, size = 50 } = props;

	return (
		<HStack
			max
			justify={'center'}
			className={classNames(cls.AppLogo, {}, [className])}
		>
			<AppLink to={getRouteMain()}>
				<AppSvg
					width={size}
					height={size}
					color="black"
					className={cls.appLogo}
				/>
			</AppLink>
			<div className={cls.gradientBig}></div>
			<div className={cls.gradientSmall}></div>
		</HStack>
	);
});
