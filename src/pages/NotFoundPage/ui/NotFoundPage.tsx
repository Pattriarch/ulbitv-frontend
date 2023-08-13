import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
	/**
	 * Дополнительные стили компонента.
	 */
	className?: string;
}

/**
 * Компонент, представляющий страницу с сообщением о том, что страница не найдена.
 *
 * @component
 * @param {NotFoundPageProps} props - Свойства компонента.
 * @returns {JSX.Element} Компонент NotFoundPage.
 */
export const NotFoundPage = memo(
	({ className }: NotFoundPageProps): JSX.Element => {
		const { t } = useTranslation();
		return (
			<Page
				data-testid={'NotFoundPage'}
				className={classNames(cls.NotFoundPage, {}, [className])}
			>
				{t('Страница не найдена')}
			</Page>
		);
	},
);
