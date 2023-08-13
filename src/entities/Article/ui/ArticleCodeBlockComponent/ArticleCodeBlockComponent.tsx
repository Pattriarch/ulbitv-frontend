import { memo } from 'react';

import { type ArticleCodeBlock } from '../../model/types/article';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Code } from '@/shared/ui/redesigned/Code';

import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
	/** Дополнительные стили блока кода. */
	className?: string;

	/** Данные блока кода. */
	block: ArticleCodeBlock;
}

/**
 * Компонент для отображения блока кода в статье.
 *
 * Этот компонент отображает содержимое блока кода, предоставляя его в структурированном
 * и форматированном виде.
 *
 * @param {ArticleCodeBlockComponentProps} props - Свойства компонента.
 */
export const ArticleCodeBlockComponent = memo(
	(props: ArticleCodeBlockComponentProps) => {
		const { className, block } = props;

		return (
			<div
				className={classNames(cls.ArticleCodeBlockComponent, {}, [
					className,
				])}
			>
				<Code text={block.code} />
			</div>
		);
	},
);
