import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { initArticlesPage } from './initArticlesPage';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { ArticleSortField, ArticleType, ArticleView } from '@/entities/Article';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('initArticlesPage', () => {
    test('fetchArticlesList should be called', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
                _inited: false,
                view: ArticleView.BIG,
                order: 'asc',
                search: '',
                sort: ArticleSortField.CREATED,
                type: ArticleType.ALL
            }
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
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
                _inited: true,
                view: ArticleView.BIG,
                order: 'asc',
                search: '',
                sort: ArticleSortField.CREATED,
                type: ArticleType.ALL
            }
        });

        const searchParams = new URLSearchParams(window.location.search);
        await thunk.callThunk(searchParams);

        // pending, fulfilled, 2 внутри action
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
