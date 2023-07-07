import { articleDetailsReducer } from './articleDetailsSlice';
import { type ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { type Article, ArticleType } from 'entities/Article/model/types/article';

const data: Article = {
    id: '1',
    title: 'Title',
    subtitle: 'Subtitle',
    img: '',
    views: 10000,
    createdAt: '2020-02-02',
    user: {
        id: '1',
        username: 'Pattriarch'
    },
    type: [ArticleType.IT],
    blocks: []
};

describe('articleDetailsSlice', () => {
    test('test fetch article by id service pending', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: false
        };
        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.pending
        )).toEqual({
            isLoading: true
        });
    });

    test('test fetch article by id service fulfilled', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true
        };
        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.fulfilled(data, '1', '')
        )).toEqual({
            isLoading: false,
            data
        });
    });
});