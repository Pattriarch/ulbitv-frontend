import { memo } from 'react';
import { useParams } from 'react-router-dom';

import { ArticleDetails } from '../ArticleDetails/ArticleDetails';

import { Card } from '@/shared/ui/redesigned/Card';

interface ArticleDetailsContainerProps {
	/**
	 * Опциональный класс для стилизации.
	 */
	className?: string;
}

/**
 * Контейнер для отображения деталей статьи.
 *
 * @param {ArticleDetailsContainerProps} props Свойства контейнера.
 * @returns {JSX.Element} Контейнер деталей статьи.
 */
export const ArticleDetailsContainer = memo(
	(props: ArticleDetailsContainerProps) => {
		const { className } = props;
		const { id } = useParams<{ id: string, }>();

		return (
			<Card max border={'partial'} className={className} padding={'24'}>
				<ArticleDetails id={id} />
			</Card>
		);
	},
);
