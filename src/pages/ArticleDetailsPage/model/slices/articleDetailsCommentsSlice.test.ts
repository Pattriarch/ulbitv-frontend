import { type DeepPartial } from "@reduxjs/toolkit";

import { fetchCommentsByArticleId } from "../services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { type ArticleDetailsCommentsSchema } from "../types/ArticleDetailsCommentsSchema";

import { articleDetailsCommentsReducer } from "./articleDetailsCommentsSlice";

describe("articleDetailsCommentsSlice", () => {
  test("test pending state", () => {
    const state: DeepPartial<ArticleDetailsCommentsSchema> = {
      isLoading: false,
    };
    expect(
      articleDetailsCommentsReducer(
        state as ArticleDetailsCommentsSchema,
        fetchCommentsByArticleId.pending
      )
    ).toEqual({
      isLoading: true,
    });
  });
});
