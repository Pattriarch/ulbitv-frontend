import { ARTICLES_PAGE_FIXTURE } from '../../tests/articlesPageFixture';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

import { initArticlesPage } from './initArticlesPage';

import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('initArticlesPage', () => {
	test('fetchArticlesList should be called', async () => {
		const thunk = new TestAsyncThunk(initArticlesPage, {
			articlesPage: ARTICLES_PAGE_FIXTURE,
		});

		const searchParams = new URLSearchParams(window.location.search);
		await thunk.callThunk(searchParams);

		// pending, fulfilled, 2 внутри action
		expect(thunk.dispatch).toHaveBeenCalledTimes(4);
		expect(fetchArticlesList).toHaveBeenCalled();
	});

	test('fetchArticlesList should not be called', async () => {
		const thunk = new TestAsyncThunk(initArticlesPage, {
			articlesPage: {
				...ARTICLES_PAGE_FIXTURE,
				_inited: true,
			},
		});

		const searchParams = new URLSearchParams(window.location.search);
		await thunk.callThunk(searchParams);

		expect(thunk.dispatch).toHaveBeenCalledTimes(2);
		expect(fetchArticlesList).not.toHaveBeenCalled();
	});
});
