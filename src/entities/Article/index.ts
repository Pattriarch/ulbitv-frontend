export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';

export type {
	Article,
	ArticleBlock,
	ArticleCodeBlock,
	ArticleImageBlock,
	ArticleTextBlock,
} from './model/types/article';
export type { ArticleDetailsSchema } from './model/types/articleDetailsSchema';
export { getArticleDetailsData, getCanCurrentUserEditArticle } from './model/selectors/articleDetails';

export { ArticleList } from './ui/ArticleList/ArticleList';
export {
	ArticleView,
	ArticleSortField,
	ArticleType,
	ArticleBlockType,
} from './consts/articleConsts';
export { articleDetailsReducer } from '@/entities/Article/model/slices/articleDetailsSlice';
export { fetchArticleById } from './model/services/fetchArticleById/fetchArticleById';
export { ArticleCard } from './ui/ArticleCard/ArticleCard';
export { ArticleDetailsContainer } from './ui/ArticleDetailsContainer/ArticleDetailsContainer';
