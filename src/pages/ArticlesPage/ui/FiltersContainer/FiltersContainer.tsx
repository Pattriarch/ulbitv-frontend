import { memo } from 'react';

import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

import { ArticlesFilters } from '@/widgets/ArticlesFilters';

interface FiltersContainerProps {
	className?: string;
}

export const FiltersContainer = memo((props: FiltersContainerProps) => {
	const { className } = props;

	const {
		onChangeSort,
		onChangeTab,
		onChangeSearch,
		onChangeOrder,
		search,
		order,
		sort,
		type,
	} = useArticleFilters();

	return (
		<ArticlesFilters
			onChangeSort={onChangeSort}
			onChangeTab={onChangeTab}
			onChangeSearch={onChangeSearch}
			onChangeOrder={onChangeOrder}
			search={search}
			order={order}
			sort={sort}
			type={type}
			className={className}
		/>
	);
});
