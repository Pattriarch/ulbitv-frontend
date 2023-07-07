import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { type ThunkConfig } from 'app/providers/StoreProvider';
import { type Comment } from 'entities/Comment';
import { getArticleDetailsData } from 'entities/Article';
import {
    fetchCommentsByArticleId
} from '../../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>
>(
    'articleDetails/addCommentForArticle',
    async (text, thunkAPI) => {
        const {
            extra,
            dispatch,
            rejectWithValue,
            getState
        } = thunkAPI;

        const userData = getUserAuthData(getState());
        const article = getArticleDetailsData(getState());

        if (!userData || !text || !article) {
            return rejectWithValue('no data');
        }

        try {
            const response = await extra.api.post<Comment>('/comments', {
                articleId: article?.id,
                userId: userData.id,
                text
            });

            if (!response.data) {
                // если ничего не вернул - кидаем ошибку
                throw new Error();
            }

            void dispatch(fetchCommentsByArticleId(String(article.id)));

            return response.data;
        } catch (e) {
            console.error(e);
            return rejectWithValue('error');
        }
    }
);
