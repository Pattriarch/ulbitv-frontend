import { type HTMLAttributes, memo, useCallback } from 'react';

import { ArticleBlockType } from '../../consts/articleConsts';
import { ArticleBlock } from '../../model/types/article';
import { EditArticleCodeBlock } from '../EditArticleCodeBlock/EditArticleCodeBlock';
import { EditArticleImageBlock } from '../EditArticleImageBlock/EditArticleImageBlock';
import { EditArticleTextBlock } from '../EditArticleTextBlock/EditArticleTextBlock';

interface EditArticleBlockProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
	block: ArticleBlock;
	onChangeBlockState: (editedBlock: ArticleBlock) => void;
}

export const EditArticleBlock = memo((props: EditArticleBlockProps) => {
	const { className, block, onChangeBlockState, ...otherProps } = props;

	const renderBlock = useCallback(
		(block: ArticleBlock) => {
			switch (block.type) {
				case ArticleBlockType.CODE:
					return (
						<EditArticleCodeBlock
							{...otherProps}
							className={className}
							block={block}
							onChangeBlockState={onChangeBlockState}
						/>
					);
				case ArticleBlockType.IMAGE:
					return (
						<EditArticleImageBlock
							{...otherProps}
							className={className}
							block={block}
							onChangeBlockState={onChangeBlockState}
						/>
					);
				case ArticleBlockType.TEXT:
					return (
						<EditArticleTextBlock
							{...otherProps}
							className={className}
							block={block}
							onChangeBlockState={onChangeBlockState}
						/>
					);
				default:
					return null;
			}
		},
		[className, onChangeBlockState, otherProps],
	);

	return <>{renderBlock(block)}</>;
});
