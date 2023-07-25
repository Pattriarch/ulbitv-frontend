import { type ArticleDetailsCommentsSchema } from "./ArticleDetailsCommentsSchema";
import { type ArticleDetailsRecommendationsSchema } from "./ArticleDetailsRecommendationsSchema";

export interface ArticleDetailsPageSchema {
  comments: ArticleDetailsCommentsSchema;
  recommendations: ArticleDetailsRecommendationsSchema;
}
