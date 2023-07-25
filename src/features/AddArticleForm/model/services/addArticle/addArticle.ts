import { createAsyncThunk } from "@reduxjs/toolkit";

import { getAddArticleData } from "../../selectors/addArticleSelectors";

import { type ThunkConfig } from "@/app/providers/StoreProvider";
import { type Article } from "@/entities/Article";
import { getUserAuthData } from "@/entities/User";
import { formatDate } from "@/shared/lib/date/formatDate";

export const addArticle = createAsyncThunk<Article, void, ThunkConfig<string>>(
  "addArticle/addArticle",
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;

    const data = getAddArticleData(getState());
    const userData = getUserAuthData(getState());

    try {
      if (!userData?.id) {
        throw new Error();
      }

      const response = await extra.api.post<Article>("/articles/", {
        ...data,
        views: 0,
        createdAt: formatDate(new Date()),
        userId: userData.id,
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      console.error(e);
      return rejectWithValue("error");
    }
  }
);
