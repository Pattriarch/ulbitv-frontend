import { type DeepPartial } from '@reduxjs/toolkit';
import { type StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView
} from '../../model/selectors/articlesPageSelectors';

describe('articlesPageSelectors', () => {
    test('should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                isLoading: true,
                ids: [],
                entities: {},
                hasMore: false,
                limit: 4,
                page: 1
            }
        };
        expect(getArticlesPageIsLoading(state as StateSchema)).toEqual(true);
    });

    test('should return with false empty isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                ids: [],
                entities: {},
                hasMore: false,
                limit: 4,
                page: 1
            }
        };
        expect(getArticlesPageIsLoading(state as StateSchema)).toEqual(false);
    });

    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                ids: [],
                entities: {},
                error: 'error',
                hasMore: false,
                limit: 4,
                page: 1
            }
        };
        expect(getArticlesPageError(state as StateSchema)).toEqual('error');
    });

    test('should return with empty error undefined', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                ids: [],
                entities: {},
                view: ArticleView.BIG,
                hasMore: false,
                limit: 4,
                page: 1
            }
        };
        expect(getArticlesPageError(state as StateSchema)).toEqual(undefined);
    });

    test('should return view', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                ids: [],
                entities: {},
                view: ArticleView.BIG,
                hasMore: false,
                limit: 4,
                page: 1
            }
        };
        expect(getArticlesPageView(state as StateSchema)).toEqual(ArticleView.BIG);
    });

    test('should return view with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                ids: [],
                entities: {},
                hasMore: false,
                limit: 4,
                page: 1
            }
        };
        expect(getArticlesPageView(state as StateSchema)).toEqual(ArticleView.SMALL);
    });
});
