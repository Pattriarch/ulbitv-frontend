import { type CSSProperties, useMemo } from 'react';

import UserIcon from '../../../assets/icons/user-32-32.svg';
import { AppImage } from '../../redesigned/AppImage';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

import { classNames, type Mods } from '@/shared/lib/classNames/classNames';

import cls from './Avatar.module.scss';

/**
 * Свойства компонента Avatar.
 *
 * @interface
 * @property {string} [className] - Дополнительные стили компонента.
 * @property {string} [src] - Путь к изображению аватара.
 * @property {number} [size] - Размер аватара.
 * @property {string} [alt] - Альтернативный текст для изображения аватара.
 */
interface AvatarProps {
	className?: string;
	src?: string;
	size?: number;
	alt?: string;
}

/**
 * Компонент для отображения аватара пользователя с поддержкой загрузки и обработки ошибок.
 *
 * @component
 * @param {AvatarProps} props - Свойства компонента.
 * @returns {JSX.Element} Компонент Avatar.
 */
export const Avatar = (props: AvatarProps) => {
	const { className, src, size = 100, alt } = props;

	const styles = useMemo<CSSProperties>(() => {
		return {
			width: size,
			height: size,
		};
	}, [size]);

	const mods: Mods = {};

	const fallback = <Skeleton width={size} height={size} border={'50%'} />;
	const errorFallback = <Icon width={size} Svg={UserIcon} />;

	return (
		<AppImage
			fallback={fallback}
			errorFallback={errorFallback}
			src={src}
			style={styles}
			className={classNames(cls.Avatar, mods, [className])}
			alt={alt}
		/>
	);
};
