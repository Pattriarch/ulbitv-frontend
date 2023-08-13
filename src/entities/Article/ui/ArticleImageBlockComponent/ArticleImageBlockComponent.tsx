import { memo } from 'react';

import { type ArticleImageBlock } from '../../model/types/article';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text as TextDeprecated, TextAlign } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';

import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
	/**
	 * Опциональный класс для стилизации.
	 */
	className?: string;

	/**
	 * Данные блока изображения.
	 */
	block: ArticleImageBlock;
}

/**
 * Компонент блока изображения статьи.
 *
 * @param {ArticleImageBlockComponentProps} props Свойства компонента.
 * @returns {JSX.Element} Блок изображения статьи.
 */
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
					<ToggleFeatures
						name={'isAppRedesigned'}
						on={<Text text={block.title} align={'center'} />}
						off={
							<TextDeprecated
								text={block.title}
								align={TextAlign.CENTER}
							/>
						}
					/>
				)}
			</div>
		);
	},
);
