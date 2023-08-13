import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/deprecated/Loader';

import cls from './PageLoader.module.scss';

interface PageLoaderProps {
	/**
	 * Дополнительные стили компонента.
	 */
	className?: string;
}

/**
 * Компонент PageLoader отображает индикатор загрузки на странице.
 *
 * @component
 * @param {PageLoaderProps} props - Свойства компонента.
 * @returns {JSX.Element} Компонент PageLoader.
 */
export const PageLoader = memo(
	({ className }: PageLoaderProps): JSX.Element => {
		return (
			<div className={classNames(cls.PageLoader, {}, [className])}>
				<Loader />
			</div>
		);
	},
);
