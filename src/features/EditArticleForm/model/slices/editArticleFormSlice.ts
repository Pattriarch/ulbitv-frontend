import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type EditArticleForm } from '../../model/types/editArticleForm';
import { type Article } from '@/entities/Article';
import { updateArticleData } from '../../model/services/updateArticleData/updateArticleData';
import { fetchArticleById } from '@/entities/Article/model/services/fetchArticleById/fetchArticleById';

import { type Profile } from '@/entities/Profile';

const initialState: EditArticleForm = {
    isLoading: false,
    error: '',
    data: undefined
};

export const editArticleFormSlice = createSlice({
    name: 'editArticleForm',
    initialState,
    reducers: {
        updateArticle: (state, action: PayloadAction<Article>) => {
            state.form = {
                ...state.data,
                ...action.payload
            };
        },
        cancelEdit: (state) => {
            state.form = state.data;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleById.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchArticleById.fulfilled, (
                    state,
                    action: PayloadAction<Profile>
                ) => {
                    state.isLoading = false;
                    state.data = action.payload;
                    state.form = action.payload;
                })
            .addCase(fetchArticleById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(updateArticleData.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                updateArticleData.fulfilled, (
                    state,
                    action: PayloadAction<Article>
                ) => {
                    state.isLoading = false;
                    state.data = action.payload;
                    state.form = action.payload;
                })
            .addCase(updateArticleData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export const editArticleFormActions = editArticleFormSlice.actions;
export const editArticleFormReducer = editArticleFormSlice.reducer;
