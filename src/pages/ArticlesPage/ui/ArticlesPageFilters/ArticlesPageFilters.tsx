import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/deprecated/Card';
import { Input } from '@/shared/ui/deprecated/Input';

import cls from './ArticlesPageFilters.module.scss';
import { ViewSelectorContainer } from '@/pages/ArticlesPage/ui/ViewSelectorContainer/ViewSelectorContainer';
import { useArticleFilters } from '@/pages/ArticlesPage/lib/hooks/useArticleFilters';

interface ArticlesPageFiltersProps {
	className?: string;
}

// todo: переписать на фичу
export const ArticlesPageFilters = memo(
	({ className }: ArticlesPageFiltersProps) => {
		const { t } = useTranslation();
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
			<div
				className={classNames(cls.ArticlesPageFilters, {}, [className])}
			>
				<div className={cls.sortWrapper}>
					<ArticleSortSelector
						sort={sort}
						order={order}
						onChangeOrder={onChangeOrder}
						onChangeSort={onChangeSort}
					/>
					<ViewSelectorContainer />
				</div>
				<Card>
					<Input
						data-testid={'ArticlesPageFilters.Input'}
						onChange={onChangeSearch}
						value={search}
						placeholder={t('Поиск')}
					/>
				</Card>
				<ArticleTypeTabs
					value={type}
					onChangeTab={onChangeTab}
					className={cls.tabs}
				/>
			</div>
		);
	},
);