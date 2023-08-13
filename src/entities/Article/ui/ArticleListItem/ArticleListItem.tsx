import { type HTMLAttributeAnchorTarget, memo } from 'react';

import { ArticleView } from '../../consts/articleConsts';
import { type Article } from '../../model/types/article';

import { ArticleListItemDeprecated } from './ArticleListItemDeprecated/ArticleListItemDeprecated';
import { ArticleListItemRedesigned } from './ArticleListItemRedesigned/ArticleListItemRedesigned';

import { ToggleFeatures } from '@/shared/lib/features';

export interface ArticleListItemProps {
	/**
	 * Опциональный класс для стилизации.
	 */
	className?: string;

	/**
	 * Статья для отображения.
	 */
	article: Article;

	/**
	 * Вид отображения статьи.
	 */
	view: ArticleView;

	/**
	 * Значение для атрибута `target` тега `<a>`.
	 */
	target?: HTMLAttributeAnchorTarget;

	/**
	 * Индекс элемента в списке.
	 */
	index?: number;

	/**
	 * Функция для установки значения последнего прокрученного элемента.
	 */
	setLastScrolledIndex?: (index: number) => void;
}

/**
 * Компонент отдельного элемента списка статей.
 *
 * @param {ArticleListItemProps} props Свойства компонента.
 * @returns {JSX.Element} Элемент списка статей.
 */
export const ArticleListItem = memo((props: ArticleListItemProps) => {
	return (
		<ToggleFeatures
			name={'isAppRedesigned'}
			on={<ArticleListItemRedesigned {...props} />}
			off={<ArticleListItemDeprecated {...props} />}
		/>
	);
});
