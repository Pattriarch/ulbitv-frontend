import { articlesPageActions, articlesPageReducer } from './articlesPageSlice';
import { type DeepPartial } from '@reduxjs/toolkit';
import { type ArticlesPageSchema } from '../types/articlesPageSchema';
import { ArticleView } from '@/entities/Article';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';

describe('articlesPageSlice', () => {
    test('test set view', () => {
        const state: DeepPartial<ArticlesPageSchema> = {
            view: ArticleView.SMALL
        };
        expect(articlesPageReducer(
            state as ArticlesPageSchema,
            articlesPageActions.setView(ArticleView.BIG)
        )).toEqual({
            view: ArticleView.BIG
        });
    });

    test('test pending state', () => {
        const state: DeepPartial<ArticlesPageSchema> = {
            isLoading: false
        };
        expect(articlesPageReducer(
            state as ArticlesPageSchema,
            fetchArticlesList.pending('', { replace: true })
        )).toEqual({
            isLoading: true,
            entities: {},
            error: undefined,
            ids: []
        });
    });

    test('test fulfilled state', () => {
        const state: DeepPartial<ArticlesPageSchema> = {
            isLoading: true
        };
        expect(articlesPageReducer(
            state as ArticlesPageSchema,
            fetchArticlesList.fulfilled([{ id: '1' }], '', { replace: true })
        )).toEqual({
            isLoading: false,
            entities: { 1: { id: '1' } },
            ids: ['1'],
            hasMore: false
        });
    });
});
