import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

import { ArticleSortField, ArticleView } from 'entities/Article';
import { ArticleType } from 'entities/Article/consts/articleConsts';

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
                type: ArticleType.ALL
            }
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
                type: ArticleType.ALL
            }
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
                type: ArticleType.ALL
            }
        });

        await thunk.callThunk();

        // pending, fulfilled, 2 внутри action
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
