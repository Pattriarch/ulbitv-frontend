import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleSortField, ArticleType } from '@/entities/Article';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import SearchIcon from '@/shared/assets/icons/search-32-32.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SortOrder } from '@/shared/types';
import { TabItem } from '@/shared/ui/deprecated/Tabs';
import { Card } from '@/shared/ui/redesigned/Card';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Input } from '@/shared/ui/redesigned/Input';
import { VStack } from '@/shared/ui/redesigned/Stack';

import cls from './ArticlesFilters.module.scss';

interface ArticlesFiltersProps {
	/**
	 * Дополнительные стили компонента.
	 */
	className?: string;

	/**
	 * Поле, по которому происходит сортировка статей.
	 */
	sort: ArticleSortField;

	/**
	 * Тип статей, которые отображаются.
	 */
	type: ArticleType;

	/**
	 * Порядок сортировки (возрастающий или убывающий).
	 */
	order: SortOrder;

	/**
	 * Текст для поиска статей.
	 */
	search: string;

	/**
	 * Callback-функция, вызываемая при изменении поля для сортировки.
	 */
	onChangeSort: (newOrder: ArticleSortField) => void;

	/**
	 * Callback-функция, вызываемая при изменении типа статей.
	 */
	onChangeTab: (tab: TabItem<ArticleType>) => void;

	/**
	 * Callback-функция, вызываемая при изменении порядка сортировки.
	 */
	onChangeOrder: (newOrder: SortOrder) => void;

	/**
	 * Callback-функция, вызываемая при изменении текста поиска.
	 */
	onChangeSearch: (value: string) => void;
}

/**
 * Компонент ArticlesFilters представляет фильтры для страницы со списком статей.
 *
 * @component
 * @param {ArticlesFiltersProps} props - Свойства компонента.
 * @returns {JSX.Element} Компонент ArticlesFilters.
 */
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
