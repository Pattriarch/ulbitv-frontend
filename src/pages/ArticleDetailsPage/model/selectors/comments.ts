import { type StateSchema } from "@/app/providers/StoreProvider";

export const getArticleDetailsCommentsIsLoading = (state: StateSchema) => {
  return state.articleDetailsPage?.comments?.isLoading || false;
};
export const getArticleDetailsCommentsError = (state: StateSchema) => {
  return state.articleDetailsPage?.comments?.error;
};
