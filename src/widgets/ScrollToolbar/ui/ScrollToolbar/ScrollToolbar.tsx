import { memo } from 'react';

import { ScrollToTopButton } from '@/features/ScrollToTopButton';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/redesigned/Stack';

import cls from './ScrollToolbar.module.scss';

interface ScrollToolbarProps {
	/**
	 * Дополнительные стили компонента.
	 */
	className?: string;
}

/**
 * Компонент ScrollToolbar отображает панель инструментов для прокрутки страницы.
 *
 * @component
 * @param {ScrollToolbarProps} props - Свойства компонента.
 * @returns {JSX.Element} Компонент ScrollToolbar.
 */
export const ScrollToolbar = memo((props: ScrollToolbarProps) => {
	const { className } = props;

	return (
		<VStack
			justify={'center'}
			align={'center'}
			max
			className={classNames(cls.ScrollToolbar, {}, [className])}
		>
			<ScrollToTopButton />
		</VStack>
	);
});
