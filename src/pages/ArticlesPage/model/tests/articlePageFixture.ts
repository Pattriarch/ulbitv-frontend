import { ArticleSortField, ArticleType, ArticleView } from '@/entities/Article';

export const ARTICLE_PAGE_FIXTURE = {
	page: 2,
	ids: [],
	entities: {},
	limit: 5,
	isLoading: false,
	hasMore: true,
	_inited: false,
	view: ArticleView.BIG,
	order: 'asc' as const,
	search: '',
	sort: ArticleSortField.CREATED,
	type: ArticleType.ALL,
};
