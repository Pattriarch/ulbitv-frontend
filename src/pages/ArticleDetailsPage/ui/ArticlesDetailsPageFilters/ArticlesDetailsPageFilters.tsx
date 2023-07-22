import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlesDetailsPageFilters.module.scss';
import { memo, useCallback } from 'react';
import {
	type ArticleSortField,
	type ArticleView,
	type ArticleType
} from '@/entities/Article';
import { useSelector } from 'react-redux';
import {
	getArticlesPageOrder,
	getArticlesPageSearch,
	getArticlesPageSort,
	getArticlesPageType,
	getArticlesPageView
} from '../../../ArticlesPage/model/selectors/articlesPageSelectors';
import { articlesPageActions } from '../../../ArticlesPage/model/slices/articlesPageSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTranslation } from 'react-i18next';
import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';
import { type SortOrder } from '@/shared/types';
import { fetchArticlesList } from '../../../ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { type TabItem } from '@/shared/ui/Tabs';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';

interface ArticlesPageFiltersProps {
	className?: string;
}

// todo: переписать на фичу
export const ArticlesDetailsPageFilters = memo(({ className }: ArticlesPageFiltersProps) => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const view = useSelector(getArticlesPageView);
	const sort = useSelector(getArticlesPageSort);
	const order = useSelector(getArticlesPageOrder);
	const search = useSelector(getArticlesPageSearch);
	const type = useSelector(getArticlesPageType);

	const fetchData = useCallback(() => {
		void dispatch(fetchArticlesList({ replace: true }));
	}, [dispatch]);

	const debouncedFetchData = useDebounce(fetchData, 500);

	const onChangeView = useCallback((view: ArticleView) => {
		void dispatch(articlesPageActions.setView(view));
	}, [dispatch]);

	const onChangeSort = useCallback((sort: ArticleSortField) => {
		void dispatch(articlesPageActions.setSort(sort));
		void dispatch(articlesPageActions.setPage(1));
		fetchData();
	}, [dispatch, fetchData]);

	const onChangeOrder = useCallback((order: SortOrder) => {
		void dispatch(articlesPageActions.setOrder(order));
		void dispatch(articlesPageActions.setPage(1));
		fetchData();
	}, [dispatch, fetchData]);

	const onChangeSearch = useCallback((search: string) => {
		void dispatch(articlesPageActions.setSearch(search));
		void dispatch(articlesPageActions.setPage(1));
		debouncedFetchData();
	}, [dispatch, debouncedFetchData]);

	const onChangeTab = useCallback((tab: TabItem<ArticleType>) => {
		void dispatch(articlesPageActions.setType(tab.value));
		void dispatch(articlesPageActions.setPage(1));
		fetchData();
	}, [dispatch, fetchData]);

	return (
		<div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
			<div className={cls.sortWrapper}>
				<ArticleSortSelector
					sort={sort}
					order={order}
					onChangeOrder={onChangeOrder}
					onChangeSort={onChangeSort}
				/>
				<ArticleViewSelector
					view={view}
					onViewClick={onChangeView}
				/>
			</div>
			<Card>
				<Input
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
});
