import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchCommentsByArticleId } from './fetchCommentsByArticleId';
import { type Comment } from 'entities/Comment';

const data: Comment[] = [
    {
        id: '1',
        user: { id: '1', username: 'test' },
        text: 'test 1'
    },
    {
        id: '2',
        user: { id: '1', username: 'test' },
        text: 'test 2'
    }
];

describe('fetchCommentsByArticleId', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId, {});

        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toBe(data);
    });

    test('without article id', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId, {});

        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk(undefined);

        expect(thunk.api.get).not.toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
