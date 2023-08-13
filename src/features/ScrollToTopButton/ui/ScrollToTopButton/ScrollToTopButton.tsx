import { memo } from 'react';

import CircleUpIcon from '@/shared/assets/icons/circle-up-32-32.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface ScrollToTopButtonProps {
	/**
	 * Дополнительные стили компонента.
	 */
	className?: string;
}

/**
 * Компонент ScrollToTopButton - кнопка для прокрутки страницы вверх.
 *
 * @component
 *
 * @param {Object} props - Пропсы компонента.
 * @param {string} props.className - Дополнительные стили компонента.
 * @returns {JSX.Element} - Возвращает JSX элемент кнопки для прокрутки страницы вверх.
 */
export const ScrollToTopButton = memo((props: ScrollToTopButtonProps) => {
	const { className } = props;

	const onClick = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<Icon
			onClick={onClick}
			className={classNames('', {}, [className])}
			clickable
			width={32}
			height={32}
			Svg={CircleUpIcon}
		/>
	);
});
