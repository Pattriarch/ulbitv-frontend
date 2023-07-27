import { Rating } from '@/entities/Rating';
import { rtkApi } from '@/shared/api/rtkApi';

interface GetArticleRatingArg {
	userId: string;
	articleId: string;
}

interface RateArticleArg {
	userId: string;
	articleId: string;
	rate: number;
	feedback?: string;
}

const articleRatingApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getArticleRating: build.query<Rating[], GetArticleRatingArg>({
			query: (arg) => ({
				url: '/article-ratings',
				params: arg,
			}),
		}),
		rateArticle: build.mutation<void, RateArticleArg>({
			query: (arg) => ({
				url: '/article-ratings',
				method: 'post',
				body: arg,
			}),
		}),
	}),
});
export const useGetArticleRating = articleRatingApi.useGetArticleRatingQuery;
export const useRateArticle = articleRatingApi.useRateArticleMutation;
