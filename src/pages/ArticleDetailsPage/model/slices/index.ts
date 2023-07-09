import { combineReducers } from '@reduxjs/toolkit';
import { type ArticleDetailsPageSchema } from 'pages/ArticleDetailsPage';
import {
    articleDetailsPageRecommendationsReducer
} from 'pages/ArticleDetailsPage/model/slices/articleDetailsPageRecommendationsSlice';
import { articleDetailsCommentsReducer } from 'pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    comments: articleDetailsCommentsReducer,
    recommendations: articleDetailsPageRecommendationsReducer
});
