import { memo } from 'react';

import { ArticleViewSelector } from '../../../../features/ArticleViewSelector/ui/ArticleViewSelector/ArticleViewSelector';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface ViewSelectorContainerProps {
	/**
	 * Дополнительные стили компонента.
	 */
	className?: string;
}

/**
 * Контейнер-обёртка для компонента выбора вида отображения статей.
 *
 * @component
 * @param {ViewSelectorContainerProps} props - Свойства контейнера.
 * @returns {JSX.Element} Компонент ViewSelectorContainer.
 */
export const ViewSelectorContainer = memo(
	(props: ViewSelectorContainerProps) => {
		const { className } = props;
		const { view, onChangeView } = useArticleFilters();

		return (
			<ArticleViewSelector
				className={className}
				view={view}
				onViewClick={onChangeView}
			/>
		);
	},
);
