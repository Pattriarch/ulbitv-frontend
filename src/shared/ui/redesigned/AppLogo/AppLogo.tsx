import { memo } from 'react';

import AppSvg from '@/shared/assets/icons/app-image.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './AppLogo.module.scss';
import { HStack } from '../../deprecated/Stack';

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
			<div className={cls.gradientBig}></div>
			<div className={cls.gradientSmall}></div>
			<AppSvg
				width={size}
				height={size}
				color="black"
				className={cls.appLogo}
			/>
		</HStack>
	);
});
