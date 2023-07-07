import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { addCommentForArticle } from './addCommentForArticle';

const data = {
    articleId: '1',
    userId: '1',
    text: 'test'
};

describe('addCommentForArticle', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle, {
            user: {
                authData: {
                    id: '1',
                    username: 'test'
                }
            },
            articleDetails: {
                data: {
                    id: '1',
                    title: 'title',
                    subtitle: 'subtitle',
                    img: 'img',
                    views: 1000,
                    createdAt: '2020-02-2',
                    type: [],
                    blocks: []
                }
            }
        });

        thunk.api.post.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk('1');

        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toBe(data);
    });

    test('server error', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle, {
            user: {
                authData: {
                    id: '1',
                    username: 'test'
                }
            },
            articleDetails: {
                data: {
                    id: '1',
                    title: 'title',
                    subtitle: 'subtitle',
                    img: 'img',
                    views: 1000,
                    createdAt: '2020-02-2',
                    type: [],
                    blocks: []
                }
            }
        });
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual('error');
    });
});
