import { combineReducers } from '@reduxjs/toolkit';
import { type ArticleDetailsPageSchema } from '../../../ArticleDetailsPage/model/types/index';
import {
    articleDetailsPageRecommendationsReducer
} from '../slices/articleDetailsPageRecommendationsSlice';
import { articleDetailsCommentsReducer } from '../slices/articleDetailsCommentsSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    comments: articleDetailsCommentsReducer,
    recommendations: articleDetailsPageRecommendationsReducer
});
