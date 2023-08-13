import { ArticleBlockType, ArticleType } from '../../consts/articleConsts';

import { type User } from '@/entities/User';

/**
 * Базовый интерфейс блока в статье.
 */
export interface ArticleBlockBase {
	/** Уникальный идентификатор блока. */
	id: string;

	/** Тип блока. */
	type: ArticleBlockType;

	/** Порядковый номер блока в статье. */
	order: number;
}

/**
 * Блок кода в статье.
 */
export interface ArticleCodeBlock extends ArticleBlockBase {
	/** Тип блока — код. */
	type: ArticleBlockType.CODE;

	/** Содержимое блока с кодом. */
	code: string;
}

/**
 * Блок изображения в статье.
 */
export interface ArticleImageBlock extends ArticleBlockBase {
	/** Тип блока — изображение. */
	type: ArticleBlockType.IMAGE;

	/** Название изображения. */
	title: string;

	/** URL-ссылка на изображение. */
	src: string;
}

/**
 * Текстовый блок в статье.
 */
export interface ArticleTextBlock extends ArticleBlockBase {
	/** Тип блока — текст. */
	type: ArticleBlockType.TEXT;

	/** Заголовок текстового блока. */
	title?: string;

	/** Абзацы текстового блока. */
	paragraphs: string[];
}

/**
 * Обобщенный тип для всех типов блоков статьи.
 */
export type ArticleBlock =
	| ArticleCodeBlock
	| ArticleImageBlock
	| ArticleTextBlock;

/**
 * Интерфейс статьи.
 */
export interface Article {
	/** Уникальный идентификатор статьи. */
	id?: string;

	/** Заголовок статьи. */
	title?: string;

	/** Автор статьи. */
	user?: User;

	/** Подзаголовок статьи. */
	subtitle?: string;

	/** URL-ссылка на главное изображение статьи. */
	img?: string;

	/** Количество просмотров статьи. */
	views?: number;

	/** Дата создания статьи. */
	createdAt?: string;

	/** Типы статьи (например, IT, экономика и др.). */
	type?: ArticleType[];

	/** Блоки, из которых состоит статья. */
	blocks?: ArticleBlock[];
}
