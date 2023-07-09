import { type ArticleDetailsRecommendationsSchema } from './ArticleDetailsRecommendationsSchema';
import { type ArticleDetailsCommentsSchema } from './ArticleDetailsCommentsSchema';

export interface ArticleDetailsPageSchema {
	comments: ArticleDetailsCommentsSchema;
	recommendations: ArticleDetailsRecommendationsSchema;
}
