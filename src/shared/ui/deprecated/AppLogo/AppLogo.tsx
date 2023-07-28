import { memo } from 'react';

import { HStack } from '../Stack';

import AppSvg from '@/shared/assets/icons/app-image.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './AppLogo.module.scss';

interface AppLogoProps {
	className?: string;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const AppLogo = memo((props: AppLogoProps) => {
	const { className } = props;

	return (
		<HStack
			max
			justify={'center'}
			className={classNames(cls.AppLogo, {}, [className])}
		>
			<div className={cls.gradientBig}></div>
			<div className={cls.gradientSmall}></div>
			<AppSvg className={cls.appLogo} />
		</HStack>
	);
});
