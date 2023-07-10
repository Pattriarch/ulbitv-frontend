import { type Article } from '@/entities/Article';

export interface EditArticleFormSchema {
	data?: Article;
	form?: Article;
	isLoading?: boolean;
	error?: string;
}
