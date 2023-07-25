import { memo } from 'react';

import { type ArticleImageBlock } from '../../model/types/article';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign } from '@/shared/ui/Text';

import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
	className?: string;
	block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(
	(props: ArticleImageBlockComponentProps) => {
		const { className, block } = props;
		return (
			<div
				className={classNames(cls.ArticleImageBlockComponent, {}, [
					className,
				])}
			>
				<img src={block.src} className={cls.img} alt={block.title} />
				{block.title && (
					<Text text={block.title} align={TextAlign.CENTER} />
				)}
			</div>
		);
	},
);
