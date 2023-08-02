import { type DragEvent, memo } from 'react';

import { Article, ArticleBlock } from '../../model/types/article';
import {
	ArticleCardDeprecated,
	ArticleCardDeprecatedError,
	ArticleCardDeprecatedLoader,
} from '../ArticleCardDeprecated/ArticleCardDeprecated';
import {
	ArticleCardRedesigned,
	ArticleCardRedesignedError,
	ArticleCardRedesignedLoader,
} from '../ArticleCardRedesigned/ArticleCardRedesigned';

import { ToggleFeatures } from '@/shared/lib/features';

export interface ArticleCardProps {
	className?: string;
	data?: Article;
	isLoading?: boolean;
	error?: string;
	onChangeImage?: (value: string) => void;
	onChangeTitle?: (value: string) => void;
	onChangeSubtitle: (value: string) => void;
	onAddCodeBlock?: () => void;
	onAddTextBlock?: () => void;
	onAddImageBlock?: () => void;
	dragStartHandler: (
		e: DragEvent<HTMLDivElement>,
		editBlock: ArticleBlock,
	) => void;
	dragEndHandler: (e: DragEvent<HTMLDivElement>) => void;
	dragOverHandler: (e: DragEvent<HTMLDivElement>) => void;
	dropHandler: (
		e: DragEvent<HTMLDivElement>,
		editBlock: ArticleBlock,
	) => void;
	onRemoveBlock: (id: string) => void;
	sortBlocks: (a: ArticleBlock, b: ArticleBlock) => number;
	onChangeBlockState: (editedBlock: ArticleBlock) => void;
}

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
