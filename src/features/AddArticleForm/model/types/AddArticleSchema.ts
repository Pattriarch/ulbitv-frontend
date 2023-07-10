import { type Article } from '@/entities/Article';

export interface AddArticleSchema {
	data?: Article;
	isLoading?: boolean;
	error?: string;
}
