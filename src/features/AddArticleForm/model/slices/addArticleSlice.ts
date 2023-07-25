import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { addArticle } from "../services/addArticle/addArticle";
import { AddArticleSchema } from "../types/AddArticleSchema";

import { type Article } from "@/entities/Article";

const initialState: AddArticleSchema = {
  error: "",
  data: undefined,
  isLoading: false,
};

export const addArticleSlice = createSlice({
  name: "addArticle",
  initialState,
  reducers: {
    updateArticleForm: (state, action: PayloadAction<Article>) => {
      state.data = {
        ...state.data,
        ...action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addArticle.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        addArticle.fulfilled,
        (state, action: PayloadAction<Article>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(addArticle.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const addArticleActions = addArticleSlice.actions;
export const addArticleReducer = addArticleSlice.reducer;
