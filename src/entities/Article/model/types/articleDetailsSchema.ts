import { type Article } from '../types/article';

/**
 * Схема детализации статьи.
 */
export interface ArticleDetailsSchema {
	/** Флаг загрузки статьи. */
	isLoading?: boolean;

	/** Ошибка при загрузке статьи. */
	error?: string;

	/** Данные о статье. */
	data?: Article;
}
