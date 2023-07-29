import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleBlockType, ArticleView } from '../../../consts/articleConsts';
import { ArticleTextBlock } from '../../../model/types/article';
import { ArticleListItemProps } from '../ArticleListItem';

import EyeIcon from '@/shared/assets/icons/eye-32-32.svg';
import { getRouteArticleDetails } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useHover } from '@/shared/lib/hooks/useHover/useHover';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

import cls from './ArticleListItemRedesigned.module.scss';

export const ArticleListItemRedesigned = memo((props: ArticleListItemProps) => {
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
		<HStack gap={'8'}>
			<Icon Svg={EyeIcon} />
			<Text text={String(article.views)} className={cls.views} />
		</HStack>
	);

	if (!article.id) {
		return null;
	}

	if (view === ArticleView.BIG) {
		const textBlock = article?.blocks?.find(
			(block) => block.type === ArticleBlockType.TEXT,
		) as ArticleTextBlock;

		return (
			<Card
				max
				padding={'24'}
				data-testid={'ArticleListItem'}
				className={classNames(cls.ArticleListItem, {}, [
					className,
					cls[view],
				])}
			>
				<VStack max gap={'16'}>
					<HStack gap={'8'}>
						<Avatar size={32} src={article?.user?.avatar} />
						<Text
							weight={'bold'}
							text={article?.user?.username}
							className={cls.username}
						/>
						<Text text={article.createdAt} />
					</HStack>
					<Text title={article.title} weight={'extrabold'} />
					<Text title={article.subtitle} size={'s'} />
					<AppImage
						fallback={<Skeleton width={'100%'} height={250} />}
						src={article.img}
						className={cls.img}
						alt={article.title}
					/>
					{textBlock?.paragraphs && (
						<Text
							className={cls.textBlock}
							text={textBlock.paragraphs.slice(0, 2).join(' ')}
						/>
					)}
					<HStack max justify={'between'}>
						<AppLink
							target={target}
							to={getRouteArticleDetails(article.id)}
						>
							<Button
								type={'button'}
								variant={'outline'}
								onClick={handleButtonClick}
							>
								{t('Читать далее...')}
							</Button>
						</AppLink>
						{views}
					</HStack>
				</VStack>
			</Card>
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
