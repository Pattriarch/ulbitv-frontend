import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Overlay.module.scss';

/**
 * Свойства компонента Overlay.
 *
 * @interface
 * @property {string} [className] - Дополнительные стили компонента.
 * @property {() => void} [onClick] - Callback-функция, вызываемая при клике на оверлей.
 */
interface OverlayProps {
	className?: string;
	onClick?: () => void;
}

/**
 * Компонент для создания оверлея, используемого в модальных окнах.
 *
 * @component
 * @param {OverlayProps} props - Свойства компонента.
 * @returns {JSX.Element} Компонент Overlay.
 */
export const Overlay = memo((props: OverlayProps) => {
	const { className, onClick } = props;

	return (
		<div
			onClick={onClick}
			className={classNames(cls.Overlay, {}, [className])}
		/>
	);
});
