import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

import { fetchNextArticlesPage } from './fetchNextArticlesPage';

import { ArticleSortField, ArticleView, ArticleType } from '@/entities/Article';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('fetchNextArticlesPage', () => {
	test('fetchArticlesList should be called', async () => {
		const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
			articlesPage: {
				page: 2,
				ids: [],
				entities: {},
				limit: 5,
				isLoading: false,
				hasMore: true,
				_inited: true,
				view: ArticleView.BIG,
				sort: ArticleSortField.CREATED,
				search: '',
				order: 'asc',
				type: ArticleType.ALL,
			},
		});

		await thunk.callThunk();

		// pending, fulfilled, 2 внутри action
		expect(thunk.dispatch).toHaveBeenCalledTimes(4);
		expect(fetchArticlesList).toHaveBeenCalled();
	});

	test('fetchArticlesList should not be called', async () => {
		const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
			articlesPage: {
				page: 2,
				ids: [],
				entities: {},
				limit: 5,
				isLoading: false,
				hasMore: false,
				_inited: true,
				view: ArticleView.BIG,
				sort: ArticleSortField.CREATED,
				search: '',
				order: 'asc',
				type: ArticleType.ALL,
			},
		});

		await thunk.callThunk();

		// pending, fulfilled, 2 внутри action
		expect(thunk.dispatch).toHaveBeenCalledTimes(2);
		expect(fetchArticlesList).not.toHaveBeenCalled();
	});

	test('fetchArticlesList should not be called', async () => {
		const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
			articlesPage: {
				page: 2,
				ids: [],
				entities: {},
				limit: 5,
				isLoading: true,
				hasMore: true,
				_inited: true,
				view: ArticleView.BIG,
				sort: ArticleSortField.CREATED,
				search: '',
				order: 'asc',
				type: ArticleType.ALL,
			},
		});

		await thunk.callThunk();

		// pending, fulfilled, 2 внутри action
		expect(thunk.dispatch).toHaveBeenCalledTimes(2);
		expect(fetchArticlesList).not.toHaveBeenCalled();
	});
});
