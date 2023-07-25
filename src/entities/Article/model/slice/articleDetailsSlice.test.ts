import { ArticleType } from "../../consts/articleConsts";
import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById";
import { type Article } from "../../model/types/article";
import { type ArticleDetailsSchema } from "../types/articleDetailsSchema";

import { articleDetailsReducer } from "./articleDetailsSlice";

const data: Article = {
  id: "1",
  title: "Title",
  subtitle: "Subtitle",
  img: "",
  views: 10000,
  createdAt: "2020-02-02",
  user: {
    id: "1",
    username: "Pattriarch",
  },
  type: [ArticleType.IT],
  blocks: [],
};

describe("articleDetailsSlice", () => {
  test("test fetch article by id service pending", () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: false,
    };
    expect(
      articleDetailsReducer(
        state as ArticleDetailsSchema,
        fetchArticleById.pending
      )
    ).toEqual({
      isLoading: true,
    });
  });

  test("test fetch article by id service fulfilled", () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: true,
    };
    expect(
      articleDetailsReducer(
        state as ArticleDetailsSchema,
        fetchArticleById.fulfilled(data, "1", "")
      )
    ).toEqual({
      isLoading: false,
      data,
    });
  });
});
