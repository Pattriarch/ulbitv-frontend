import { createAsyncThunk } from "@reduxjs/toolkit";

import { getEditArticleForm } from "../../selectors/editArticleFormSelectors";

import { type ThunkConfig } from "@/app/providers/StoreProvider";
import { type Article } from "@/entities/Article";

export const updateArticleData = createAsyncThunk<
  Article,
  void,
  ThunkConfig<string>
>("editArticleForm/updateArticleData", async (_, thunkAPI) => {
  const { extra, rejectWithValue, getState } = thunkAPI;

  const formData = getEditArticleForm(getState());

  if (!formData?.id) {
    throw new Error();
  }

  try {
    const response = await extra.api.put<Article>(
      `/articles/${formData?.id}`,
      formData
    );

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    console.error(e);
    return rejectWithValue("error");
  }
});
