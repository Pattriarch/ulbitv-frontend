import { articlesPageActions, articlesPageReducer } from './articlesPageSlice';
import { type DeepPartial } from '@reduxjs/toolkit';
import { type ArticlesPageSchema } from 'pages/ArticlesPage';
import { ArticleView } from 'entities/Article';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';

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
			fetchArticlesList.pending
        )).toEqual({
            isLoading: true
        });
    });
});
