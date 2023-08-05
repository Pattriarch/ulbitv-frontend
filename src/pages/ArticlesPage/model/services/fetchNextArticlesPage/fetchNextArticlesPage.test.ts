import { ARTICLES_PAGE_FIXTURE } from '../../tests/articlesPageFixture';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

import { fetchNextArticlesPage } from './fetchNextArticlesPage';

import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('fetchNextArticlesPage', () => {
	test('fetchArticlesList should be called', async () => {
		const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
			articlesPage: ARTICLES_PAGE_FIXTURE,
		});

		await thunk.callThunk();

		// pending, fulfilled, 2 внутри action
		expect(thunk.dispatch).toHaveBeenCalledTimes(4);
		expect(fetchArticlesList).toHaveBeenCalled();
	});

	test('fetchArticlesList should not be called', async () => {
		const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
			articlesPage: {
				...ARTICLES_PAGE_FIXTURE, hasMore: false,
			},
		});

		await thunk.callThunk();

		expect(thunk.dispatch).toHaveBeenCalledTimes(2);
		expect(fetchArticlesList).not.toHaveBeenCalled();
	});

	test('fetchArticlesList should not be called', async () => {
		const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
			articlesPage: {
				...ARTICLES_PAGE_FIXTURE, isLoading: true,
			},
		});

		await thunk.callThunk();

		expect(thunk.dispatch).toHaveBeenCalledTimes(2);
		expect(fetchArticlesList).not.toHaveBeenCalled();
	});
});
