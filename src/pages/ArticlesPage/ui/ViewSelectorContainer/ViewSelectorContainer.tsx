import { memo } from 'react';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { useArticleFilters } from '@/pages/ArticlesPage/lib/hooks/useArticleFilters';

interface ViewSelectorContainerProps {
	className?: string;
}

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
