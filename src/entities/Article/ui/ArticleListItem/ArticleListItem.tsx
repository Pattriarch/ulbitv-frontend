import { type HTMLAttributeAnchorTarget, memo } from 'react';

import { ArticleView } from '../../consts/articleConsts';
import { type Article } from '../../model/types/article';

import { ArticleListItemDeprecated } from './ArticleListItemDeprecated/ArticleListItemDeprecated';
import { ArticleListItemRedesigned } from './ArticleListItemRedesigned/ArticleListItemRedesigned';

import { ToggleFeatures } from '@/shared/lib/features';

export interface ArticleListItemProps {
	className?: string;
	article: Article;
	view: ArticleView;
	target?: HTMLAttributeAnchorTarget;
	index?: number;
	setLastScrolledIndex?: (index: number) => void;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
	return (
		<ToggleFeatures
			name={'isAppRedesigned'}
			on={<ArticleListItemRedesigned {...props} />}
			off={<ArticleListItemDeprecated {...props} />}
		/>
	);
});
