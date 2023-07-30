import { memo } from 'react';

import { type ArticleTextBlock } from '../../model/types/article';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';

import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
	className?: string;
	block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
	(props: ArticleTextBlockComponentProps) => {
		const { className, block } = props;

		return (
			<div
				className={classNames(cls.ArticleTextBlockComponent, {}, [
					className,
				])}
			>
				{block.title && (
					<ToggleFeatures
						name={'isAppRedesigned'}
						on={<Text title={block.title} className={cls.title} />}
						off={
							<TextDeprecated
								title={block.title}
								className={cls.title}
							/>
						}
					/>
				)}
				{block.paragraphs.map((paragraph, index) => (
					<ToggleFeatures
						key={index}
						name={'isAppRedesigned'}
						on={
							<Text
								key={index}
								text={paragraph}
								className={cls.pargraph}
							/>
						}
						off={
							<TextDeprecated
								key={index}
								text={paragraph}
								className={cls.pargraph}
							/>
						}
					/>
				))}
			</div>
		);
	},
);
