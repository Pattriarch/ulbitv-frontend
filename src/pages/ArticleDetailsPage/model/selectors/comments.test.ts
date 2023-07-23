import { type DeepPartial } from '@reduxjs/toolkit';

import {
    getArticleDetailsCommentsError,
    getArticleDetailsCommentsIsLoading
} from './comments';

import { type StateSchema } from '@/app/providers/StoreProvider';

describe('getArticleDetailsCommentsState', () => {
    test('should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsPage: {
                comments: {
                    isLoading: true,
                    ids: [],
                    entities: {}
                },
                recommendations: {
                    ids: [],
                    entities: {}
                }
            }
        };
        expect(getArticleDetailsCommentsIsLoading(state as StateSchema)).toEqual(true);
    });

    test('should return false', () => {
        const state: DeepPartial<StateSchema> = {
	        articleDetailsPage: {
		        comments: {
			        ids: [],
			        entities: {}
		        },
		        recommendations: {
			        ids: [],
			        entities: {}
		        }
	        }
        };
        expect(getArticleDetailsCommentsIsLoading(state as StateSchema)).toEqual(false);
    });

    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
	        articleDetailsPage: {
		        comments: {
			        ids: [],
			        entities: {},
			        error: 'error'
		        },
		        recommendations: {
			        ids: [],
			        entities: {}
		        }
	        }
        };
        expect(getArticleDetailsCommentsError(state as StateSchema)).toEqual('error');
    });

    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsCommentsError(state as StateSchema)).toEqual(undefined);
    });
});
