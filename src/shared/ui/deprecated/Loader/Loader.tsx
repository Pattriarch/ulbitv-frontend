import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import './Loader.scss';

interface LoaderProps {
	className?: string;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Loader = memo(({ className }: LoaderProps): JSX.Element => {
	return (
		<div className={classNames('lds-roller', {}, [className])}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
});