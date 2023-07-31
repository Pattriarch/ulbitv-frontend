import { memo } from 'react';

import CircleUpIcon from '@/shared/assets/icons/circle-up-32-32.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/redesigned/Icon';

import cls from './ScrollToTopButton.module.scss';

interface ScrollToTopButtonProps {
	className?: string;
}

export const ScrollToTopButton = memo((props: ScrollToTopButtonProps) => {
	const { className } = props;

	const onClick = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<Icon
			onClick={onClick}
			className={classNames(cls.ScrollToTopButton, {}, [className])}
			clickable
			width={32}
			height={32}
			Svg={CircleUpIcon}
		/>
	);
});
