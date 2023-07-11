import { type Article } from 'entities/Article';

export interface EditArticleForm {
	data?: Article;
	form?: Article;
	isLoading?: boolean;
	error?: string;
}
