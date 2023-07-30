import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleBlockType, ArticleView } from '../../../consts/articleConsts';
import { ArticleTextBlock } from '../../../model/types/article';
import { ArticleListItemProps } from '../ArticleListItem';

import EyeIcon from '@/shared/assets/icons/eye-32-32.svg';
import { getRouteArticleDetails } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
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

	const handleButtonClick = useCallback(() => {
		if (setLastScrolledIndex && index) {
			setLastScrolledIndex(index);
		}
	}, [index, setLastScrolledIndex]);

	const userInfo = (
		<>
			<Avatar
				size={32}
				src={article?.user?.avatar}
				className={cls.avatar}
			/>
			<Text
				weight={'bold'}
				text={article?.user?.username}
				className={cls.username}
			/>
		</>
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
						{userInfo}
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
		>
			<Card className={cls.card} border={'round'} padding={'0'}>
				<AppImage
					fallback={<Skeleton width={'100%'} height={200} />}
					src={article.img}
					className={cls.img}
					alt={article.title}
				/>
				<VStack className={cls.info} gap={'4'}>
					<Text title={article.title} className={cls.title} />
					<VStack gap={'4'} className={cls.footer} max>
						<HStack justify={'between'} max>
							<Text
								text={article.createdAt}
								className={cls.date}
							/>
							{views}
						</HStack>
						<HStack gap={'8'}>{userInfo}</HStack>
					</VStack>
				</VStack>
			</Card>
		</AppLink>
	);
});
