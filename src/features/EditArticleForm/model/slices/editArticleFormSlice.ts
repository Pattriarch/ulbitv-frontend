import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { updateArticleData } from '../services/updateArticleData/updateArticleData';
import { EditArticleFormSchema } from '../types/editArticleFormSchema';

import { type Article } from '@/entities/Article';
import { fetchArticleById } from '@/entities/Article';

const initialState: EditArticleFormSchema = {
	isLoading: false,
	error: '',
	data: undefined,
	form: undefined,
};

export const editArticleFormSlice = createSlice({
	name: 'editArticleForm',
	initialState,
	reducers: {
		updateArticle: (state, action: PayloadAction<Partial<Article>>) => {
			// @ts-expect-error todo fix it later
			state.form = {
				...state.data,
				...action.payload,
			};
		},
		cancelEdit: (state) => {
			state.form = state.data;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchArticleById.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(
				fetchArticleById.fulfilled,
				(state, action: PayloadAction<Article>) => {
					state.isLoading = false;
					state.data = action.payload;
					state.form = action.payload;
				},
			)
			.addCase(fetchArticleById.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(updateArticleData.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(
				updateArticleData.fulfilled,
				(state, action: PayloadAction<Article>) => {
					state.isLoading = false;
					state.data = action.payload;
					state.form = action.payload;
				},
			)
			.addCase(updateArticleData.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const editArticleFormActions = editArticleFormSlice.actions;
export const editArticleFormReducer = editArticleFormSlice.reducer;
