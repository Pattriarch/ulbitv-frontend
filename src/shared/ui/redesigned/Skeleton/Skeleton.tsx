import { type CSSProperties, memo, useContext } from 'react';

import { DisableAnimationsContext } from '@/shared/config/storybook/DisableAnimationsDecorator/DisableAnimationsDecorator';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Skeleton.module.scss';

/**
 * Свойства компонента Skeleton.
 *
 * @interface
 * @property {string} [className] - Дополнительные стили компонента.
 * @property {string | number} [height] - Высота скелетона. Может быть задана строкой (с единицами измерения) или числом.
 * @property {string | number} [width] - Ширина скелетона. Может быть задана строкой (с единицами измерения) или числом.
 * @property {string} [border] - Стиль границы скелетона (например, "1px solid #ddd").
 */
interface SkeletonProps {
	className?: string;
	height?: string | number;
	width?: string | number;
	border?: string;
}

/**
 * Компонент для создания анимированных скелетонов, используемых во время загрузки контента.
 *
 * @component
 * @param {SkeletonProps} props - Свойства компонента.
 * @returns {JSX.Element} Компонент Skeleton.
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
