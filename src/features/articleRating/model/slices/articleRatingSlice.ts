import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type ArticleRatingSchema } from '../types/articleRatingSchema';

const initialState: ArticleRatingSchema = {

};

export const articleRatingSlice = createSlice({
    name: 'articleRating',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {

        }
    }
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const articleRatingActions = articleRatingSlice.actions;
export const articleRatingReducer = articleRatingSlice.reducer;
