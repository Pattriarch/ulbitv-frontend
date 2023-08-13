import { type DragEvent, memo } from 'react';

import { Article, ArticleBlock } from '../../model/types/article';

import {
	ArticleCardDeprecated,
	ArticleCardDeprecatedError,
	ArticleCardDeprecatedLoader,
} from './ArticleCardDeprecated/ArticleCardDeprecated';
import {
	ArticleCardRedesigned,
	ArticleCardRedesignedError,
	ArticleCardRedesignedLoader,
} from './ArticleCardRedesigned/ArticleCardRedesigned';

import { ToggleFeatures } from '@/shared/lib/features';

export interface ArticleCardProps {
	/** Дополнительные стили карточки. */
	className?: string;

	/** Данные статьи. */
	data?: Article;

	/** Флаг индикации загрузки. */
	isLoading?: boolean;

	/** Текст ошибки. */
	error?: string;

	/** Обработчики изменения данных статьи. */
	onChangeImage?: (value: string) => void;
	onChangeTitle?: (value: string) => void;
	onChangeSubtitle: (value: string) => void;

	/** Обработчики для добавления новых блоков в статью. */
	onAddCodeBlock?: () => void;
	onAddTextBlock?: () => void;
	onAddImageBlock?: () => void;

	/** Обработчики для работы с Drag & Drop функциональностью блоков статьи. */
	dragStartHandler: (e: DragEvent<HTMLDivElement>, editBlock: ArticleBlock) => void;
	dragEndHandler: (e: DragEvent<HTMLDivElement>) => void;
	dragOverHandler: (e: DragEvent<HTMLDivElement>) => void;
	dropHandler: (e: DragEvent<HTMLDivElement>, editBlock: ArticleBlock) => void;

	/** Обработчик для удаления блока из статьи. */
	onRemoveBlock: (id: string) => void;

	/** Функция сортировки блоков статьи. */
	sortBlocks: (a: ArticleBlock, b: ArticleBlock) => number;

	/** Обработчик изменения состояния блока. */
	onChangeBlockState: (editedBlock: ArticleBlock) => void;
}

/**
 * Компонент для отображения карточки статьи.
 *
 * Этот компонент отвечает за отображение статьи в зависимости от её состояния:
 * загружается, произошла ошибка или успешно загружена.
 * Компонент также решает, какую версию карточки отображать (редизайн или устаревшую)
 * на основе флага 'isAppRedesigned'.
 *
 * @param {ArticleCardProps} props - Свойства компонента.
 */
export const ArticleCard = memo((props: ArticleCardProps) => {
	const { isLoading, error } = props;

	if (isLoading) {
		return (
			<ToggleFeatures
				name={'isAppRedesigned'}
				on={<ArticleCardRedesignedLoader />}
				off={<ArticleCardDeprecatedLoader />}
			/>
		);
	}

	if (error) {
		return (
			<ToggleFeatures
				name={'isAppRedesigned'}
				on={<ArticleCardRedesignedError />}
				off={<ArticleCardDeprecatedError />}
			/>
		);
	}

	return (
		<ToggleFeatures
			name={'isAppRedesigned'}
			on={<ArticleCardRedesigned {...props} />}
			off={<ArticleCardDeprecated {...props} />}
		/>
	);
});
