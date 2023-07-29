import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
	getArticlesPageOrder,
	getArticlesPageSearch,
	getArticlesPageSort,
	getArticlesPageType,
	getArticlesPageView,
} from '@/pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { useCallback } from 'react';
import { ArticleSortField, ArticleType, ArticleView } from '@/entities/Article';
import { articlesPageActions } from '@/pages/ArticlesPage/model/slices/articlesPageSlice';
import { SortOrder } from '@/shared/types';
import { TabItem } from '@/shared/ui/deprecated/Tabs';
import { fetchArticlesList } from '@/pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';

export function useArticleFilters() {
	const dispatch = useAppDispatch();
	const sort = useSelector(getArticlesPageSort);
	const order = useSelector(getArticlesPageOrder);
	const search = useSelector(getArticlesPageSearch);
	const type = useSelector(getArticlesPageType);
	const view = useSelector(getArticlesPageView);

	const fetchData = useCallback(() => {
		void dispatch(fetchArticlesList({ replace: true }));
	}, [dispatch]);

	const debouncedFetchData = useDebounce(fetchData, 500);

	const onChangeView = useCallback(
		(view: ArticleView) => {
			void dispatch(articlesPageActions.setView(view));
		},
		[dispatch],
	);

	const onChangeSort = useCallback(
		(sort: ArticleSortField) => {
			void dispatch(articlesPageActions.setSort(sort));
			void dispatch(articlesPageActions.setPage(1));
			fetchData();
		},
		[dispatch, fetchData],
	);

	const onChangeOrder = useCallback(
		(order: SortOrder) => {
			void dispatch(articlesPageActions.setOrder(order));
			void dispatch(articlesPageActions.setPage(1));
			fetchData();
		},
		[dispatch, fetchData],
	);

	const onChangeSearch = useCallback(
		(search: string) => {
			void dispatch(articlesPageActions.setSearch(search));
			void dispatch(articlesPageActions.setPage(1));
			debouncedFetchData();
		},
		[dispatch, debouncedFetchData],
	);

	const onChangeTab = useCallback(
		(tab: TabItem<ArticleType>) => {
			void dispatch(articlesPageActions.setType(tab.value));
			void dispatch(articlesPageActions.setPage(1));
			fetchData();
		},
		[dispatch, fetchData],
	);

	return {
		sort,
		order,
		search,
		type,
		view,
		onChangeView,
		onChangeSort,
		onChangeOrder,
		onChangeSearch,
		onChangeTab,
	};
}
