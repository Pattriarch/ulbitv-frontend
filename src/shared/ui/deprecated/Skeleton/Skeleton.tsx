import { type CSSProperties, memo, useContext } from 'react';

import {
	DisableAnimationsContext,
} from '@/shared/config/storybook/DisableAnimationsDecorator/DisableAnimationsDecorator';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Skeleton.module.scss';

interface SkeletonProps {
	className?: string;
	height?: string | number;
	width?: string | number;
	border?: string;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Skeleton = memo((props: SkeletonProps) => {
	const { className, height, width, border } = props;
	const disableAnimations = useContext(DisableAnimationsContext);

	// перерисовки в скелетоне - это норма
	const styles: CSSProperties = {
		width,
		height,
		borderRadius: border,
	};

	if (disableAnimations) {
		return <>...</>;
	}

	return (
		<div
			className={classNames(cls.Skeleton, {}, [className])}
			style={styles}
		/>
	);
});
