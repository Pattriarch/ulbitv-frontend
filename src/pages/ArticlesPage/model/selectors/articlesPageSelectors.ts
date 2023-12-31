import { type StateSchema } from '@/app/providers/StoreProvider';
import { ArticleSortField, ArticleType, ArticleView } from '@/entities/Article';
import { buildSelector } from '@/shared/lib/store';

export const getArticlesPageIsLoading = (state: StateSchema) =>
	state.articlesPage?.isLoading || false;
export const getArticlesPageError = (state: StateSchema) =>
	state.articlesPage?.error;
export const getArticlesPageView = (state: StateSchema) =>
	state.articlesPage?.view || ArticleView.SMALL;
export const getArticlesPagePageNumber = (state: StateSchema) =>
	state.articlesPage?.page || 1;
export const getArticlesPageLimit = (state: StateSchema) =>
	state.articlesPage?.limit || 27;
export const getArticlesPageHasMore = (state: StateSchema) =>
	state.articlesPage?.hasMore;
export const getArticlesPageOrder = (state: StateSchema) =>
	state.articlesPage?.order || 'asc';
export const getArticlesPageSort = (state: StateSchema) =>
	state.articlesPage?.sort || ArticleSortField.CREATED;
export const getArticlesPageSearch = (state: StateSchema) =>
	state.articlesPage?.search || '';
export const getArticlesPageType = (state: StateSchema) =>
	state.articlesPage?.type || ArticleType.ALL;
export const getArticlesLastScrolledIndex = (state: StateSchema) =>
	state.articlesPage?.lastScrolledIndex;
export const getArticlesPageInited = (state: StateSchema) =>
	state.articlesPage?._inited;

export const [useArticleItemById] = buildSelector(
	(state, id: string) => state.articlesPage?.entities[id],
);
