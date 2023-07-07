import { type DeepPartial } from '@reduxjs/toolkit';
import { type StateSchema } from 'app/providers/StoreProvider';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading
} from '../../model/selectors/articleDetails';

describe('articleDetails', () => {
    test('should return article data', () => {
        const data = {
            id: '1',
            title: 'title',
	        subtitle: 'subtitle',
            img: 'path',
            views: 1000,
            createdAt: '2020-02-02',
            type: [],
            blocks: []
        };
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data
            }
        };
        expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
    });

    test('should work with empty data state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
    });

    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: 'error'
            }
        };
        expect(getArticleDetailsError(state as StateSchema)).toEqual('error');
    });

    test('should work with empty error state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
    });

    test('should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true
            }
        };
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
    });

    test('should work with empty isLoading state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false);
    });
});
