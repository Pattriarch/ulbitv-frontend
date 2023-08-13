import { memo, useContext } from 'react';

import './Loader.scss';

import {
	DisableAnimationsContext,
} from '@/shared/config/storybook/DisableAnimationsDecorator/DisableAnimationsDecorator';
import { classNames } from '@/shared/lib/classNames/classNames';

interface LoaderProps {
	className?: string;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Loader = memo(({ className }: LoaderProps): JSX.Element => {
	const disableAnimations = useContext(DisableAnimationsContext);

	if (disableAnimations) {
		return <>...</>;
	}

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
