import { ArticleBlockType } from '../../consts/articleConsts';
import { ArticleBlock } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

import cls from './ArticleDetails.module.scss';

/**
 * Рендерит блок статьи на основе его типа.
 *
 * @param {ArticleBlock} block Блок статьи.
 * @returns {JSX.Element|null} Компонент блока или null, если тип блока неизвестен.
 */
export const renderArticleBlock = (block: ArticleBlock) => {
	switch (block.type) {
		case ArticleBlockType.CODE:
			return (
				<ArticleCodeBlockComponent
					key={block.id}
					className={cls.block}
					block={block}
				/>
			);
		case ArticleBlockType.IMAGE:
			return (
				<ArticleImageBlockComponent
					key={block.id}
					className={cls.block}
					block={block}
				/>
			);
		case ArticleBlockType.TEXT:
			return (
				<ArticleTextBlockComponent
					key={block.id}
					className={cls.block}
					block={block}
				/>
			);
		default:
			return null;
	}
};
