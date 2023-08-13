export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
export { ArticleList } from './ui/ArticleList/ArticleList';
export { ArticleCard } from './ui/ArticleCard/ArticleCard';
export { ArticleDetailsContainer } from './ui/ArticleDetailsContainer/ArticleDetailsContainer';

export type {
	Article,
	ArticleBlock,
	ArticleCodeBlock,
	ArticleImageBlock,
	ArticleTextBlock,
} from './model/types/article';
export type { ArticleDetailsSchema } from './model/types/articleDetailsSchema';

export { fetchArticleById } from './model/services/fetchArticleById/fetchArticleById';
export {
	getArticleDetailsData,
	getCanCurrentUserEditArticle,
} from './model/selectors/articleDetails';
export {
	ArticleView,
	ArticleSortField,
	ArticleType,
	ArticleBlockType,
} from './consts/articleConsts';
export { articleDetailsReducer } from '@/entities/Article/model/slices/articleDetailsSlice';
