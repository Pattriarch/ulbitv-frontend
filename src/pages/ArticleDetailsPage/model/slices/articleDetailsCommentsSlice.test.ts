import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';
import { type ArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage';
import {
    fetchCommentsByArticleId
} from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { type DeepPartial } from '@reduxjs/toolkit';

describe('articleDetailsCommentsSlice', () => {
    test('test pending state', () => {
        const state: DeepPartial<ArticleDetailsCommentsSchema> = {
            isLoading: false
        };
        expect(articleDetailsCommentsReducer(
            state as ArticleDetailsCommentsSchema,
            fetchCommentsByArticleId.pending
        )).toEqual({
            isLoading: true
        });
    });
});
