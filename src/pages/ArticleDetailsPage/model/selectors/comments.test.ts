import { type DeepPartial } from '@reduxjs/toolkit';
import { type StateSchema } from 'app/providers/StoreProvider';
import {
    getArticleDetailsCommentsError,
    getArticleDetailsCommentsIsLoading
} from 'pages/ArticleDetailsPage/model/selectors/comments';

describe('getArticleDetailsCommentsState', () => {
    test('should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsComments: {
                isLoading: true,
                ids: [],
                entities: {}
            }
        };
        expect(getArticleDetailsCommentsIsLoading(state as StateSchema)).toEqual(true);
    });

    test('should return false', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsComments: {
                ids: [],
                entities: {}
            }
        };
        expect(getArticleDetailsCommentsIsLoading(state as StateSchema)).toEqual(false);
    });

    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsComments: {
                error: 'error',
                ids: [],
                entities: {}
            }
        };
        expect(getArticleDetailsCommentsError(state as StateSchema)).toEqual('error');
    });

    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsCommentsError(state as StateSchema)).toEqual(undefined);
    });
});
