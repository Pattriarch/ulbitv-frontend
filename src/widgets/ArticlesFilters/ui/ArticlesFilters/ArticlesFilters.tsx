import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlesFilters.module.scss';
import { memo } from 'react';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { useTranslation } from 'react-i18next';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types';
import { TabItem } from '@/shared/ui/deprecated/Tabs';
import { Input } from '@/shared/ui/redesigned/Input';
import SearchIcon from '@/shared/assets/icons/search-32-32.svg';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface ArticlesFiltersProps {
	className?: string;
	sort: ArticleSortField;
	type: ArticleType;
	order: SortOrder;
	search: string;
	onChangeSort: (newOrder: ArticleSortField) => void;
	onChangeTab: (tab: TabItem<ArticleType>) => void;
	onChangeOrder: (newOrder: SortOrder) => void;
	onChangeSearch: (value: string) => void;
}

export const ArticlesFilters = memo((props: ArticlesFiltersProps) => {
	const {
		className,
		sort,
		type,
		order,
		search,
		onChangeSort,
		onChangeTab,
		onChangeOrder,
		onChangeSearch,
	} = props;
	const { t } = useTranslation();

	return (
		<Card
			className={classNames(cls.ArticlesFilters, {}, [className])}
			padding={'24'}
		>
			<VStack gap={'32'}>
				<Input
					data-testid={'ArticlesPageFilters.Input'}
					onChange={onChangeSearch}
					value={search}
					size={'s'}
					placeholder={t('Поиск')}
					addonLeft={<Icon Svg={SearchIcon} />}
				/>
				<ArticleTypeTabs
					value={type}
					onChangeTab={onChangeTab}
					className={cls.tabs}
				/>
				<ArticleSortSelector
					sort={sort}
					order={order}
					onChangeOrder={onChangeOrder}
					onChangeSort={onChangeSort}
				/>
			</VStack>
		</Card>
	);
});
