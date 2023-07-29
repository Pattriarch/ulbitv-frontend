import { type HTMLAttributeAnchorTarget, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Card } from '@/shared/ui/deprecated/Card';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { Text } from '@/shared/ui/deprecated/Text';

import { ArticleBlockType, ArticleView } from '../../consts/articleConsts';
import { type Article, type ArticleTextBlock } from '../../model/types/article';
import { ArticleTextBlockComponent } from '../../ui/ArticleTextBlockComponent/ArticleTextBlockComponent';

import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { getRouteArticleDetails } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useHover } from '@/shared/lib/hooks/useHover/useHover';

import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
	className?: string;
	article: Article;
	view: ArticleView;
	target?: HTMLAttributeAnchorTarget;
	index?: number;
	setLastScrolledIndex?: (index: number) => void;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
	const { className, article, target, view, index, setLastScrolledIndex } =
		props;

	const { t } = useTranslation();
	const [_, bindHover] = useHover();

	const handleButtonClick = useCallback(() => {
		if (setLastScrolledIndex && index) {
			setLastScrolledIndex(index);
		}
	}, [index, setLastScrolledIndex]);

	const types = (
		<Text text={article?.type?.join(', ')} className={cls.types} />
	);
	const views = (
		<>
			<Text text={String(article.views)} className={cls.views} />
			<Icon Svg={EyeIcon} />
		</>
	);

	if (!article.id) {
		return null;
	}

	if (view === ArticleView.BIG) {
		const textBlock = article?.blocks?.find(
			(block) => block.type === ArticleBlockType.TEXT,
		) as ArticleTextBlock;

		return (
			<div
				data-testid={'ArticleListItem'}
				className={classNames(cls.ArticleListItem, {}, [
					className,
					cls[view],
				])}
			>
				<Card className={cls.card}>
					<div className={cls.header}>
						<Avatar size={30} src={article?.user?.avatar} />
						<Text
							text={article?.user?.username}
							className={cls.username}
						/>
						<Text text={article.createdAt} className={cls.date} />
					</div>
					<Text title={article.title} className={cls.title} />
					{types}
					<AppImage
						fallback={<Skeleton width={'100%'} height={250} />}
						src={article.img}
						className={cls.img}
						alt={article.title}
					/>
					{textBlock && (
						<ArticleTextBlockComponent
							block={textBlock}
							className={cls.textBlock}
						/>
					)}
					<div className={cls.footer}>
						<AppLink
							target={target}
							to={getRouteArticleDetails(article.id)}
						>
							<Button
								type={'button'}
								theme={ButtonTheme.OUTLINE}
								onClick={handleButtonClick}
							>
								{t('Читать далее...')}
							</Button>
						</AppLink>
						{views}
					</div>
				</Card>
			</div>
		);
	}

	return (
		<AppLink
			data-testid={'ArticleListItem'}
			target={target}
			onClick={handleButtonClick}
			to={getRouteArticleDetails(article.id)}
			className={classNames(cls.ArticleListItem, {}, [
				className,
				cls[view],
			])}
			{...bindHover}
		>
			<Card className={cls.card}>
				<div className={cls.imageWrapper}>
					<AppImage
						fallback={<Skeleton width={200} height={200} />}
						src={article.img}
						className={cls.img}
						alt={article.title}
					/>
					<Text text={article.createdAt} className={cls.date} />
				</div>
				<div className={cls.infoWrapper}>
					{types}
					{views}
				</div>
				<Text text={article.title} className={cls.title} />
			</Card>
		</AppLink>
	);
});
