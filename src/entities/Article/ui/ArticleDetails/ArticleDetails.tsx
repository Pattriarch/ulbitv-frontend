import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
	getArticleDetailsData,
	getArticleDetailsError,
	getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';

import { renderArticleBlock } from './renderBlock';

import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
	DynamicModuleLoader,
	type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import {
	Text as TextDeprecated,
	TextAlign,
	TextSize,
} from '@/shared/ui/deprecated/Text';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

import cls from './ArticleDetails.module.scss';
import { useAppEffect } from '@/shared/lib/hooks/useAppEffect/useAppEffect';

interface ArticleDetailsProps {
	className?: string;
	id?: string;
}

const reducers: ReducersList = {
	articleDetails: articleDetailsReducer,
};

const Deprecated = () => {
	const article = useSelector(getArticleDetailsData);

	return (
		<>
			<HStack justify={'center'} max className={cls.avatarWrapper}>
				<AvatarDeprecated
					size={200}
					src={article?.img}
					className={cls.avatar}
				/>
			</HStack>
			<VStack gap={'4'} max data-testid={'ArticleDetails.Info'}>
				<TextDeprecated
					className={cls.title}
					size={TextSize.L}
					title={article?.title}
					text={article?.subtitle}
				/>
				<HStack gap={'8'} className={cls.articleInfo}>
					<IconDeprecated Svg={EyeIcon} className={cls.icon} />
					<TextDeprecated text={String(article?.views)} />
				</HStack>
				<HStack gap={'8'} className={cls.articleInfo}>
					<IconDeprecated Svg={CalendarIcon} className={cls.icon} />
					<TextDeprecated text={article?.createdAt} />
				</HStack>
			</VStack>
			{article?.blocks?.map(renderArticleBlock)}
		</>
	);
};

const Redesigned = () => {
	const article = useSelector(getArticleDetailsData);
	return (
		<>
			<Text
				tag={'h1'}
				size={'l'}
				weight={'extrabold'}
				title={article?.title}
			/>
			<Text title={article?.subtitle} size={'m'} />
			<AppImage
				fallback={
					<SkeletonRedesigned
						width={'100%'}
						height={420}
						border={'16'}
					/>
				}
				src={article?.img}
				className={cls.img}
			/>
			<VStack gap={'32'} max>
				{article?.blocks?.map(renderArticleBlock)}
			</VStack>
		</>
	);
};

const ArticleDetailsSkeleton = () => {
	const Skeleton = toggleFeatures({
		name: 'isAppRedesigned',
		on: () => SkeletonRedesigned,
		off: () => SkeletonDeprecated,
	});

	return (
		<ToggleFeatures
			name={'isAppRedesigned'}
			on={
				<VStack max gap={'16'}>
					<Skeleton height={36} width={300} />
					<Skeleton height={32} width={500} />

					<Skeleton width={'100%'} height={420} />

					<Skeleton height={32} width={300} />
					<Skeleton height={144} width={'100%'} />

					<Skeleton height={32} width={300} />
					<Skeleton height={196} width={'100%'} />

					<Skeleton height={32} width={300} />
					<Skeleton height={144} width={'100%'} />
				</VStack>
			}
			off={
				<>
					<Skeleton
						className={cls.avatar}
						width={200}
						height={200}
						border={'50%'}
					/>
					<Skeleton className={cls.title} width={300} height={32} />
					<Skeleton
						className={cls.skeleton}
						width={600}
						height={24}
					/>
					<Skeleton
						className={cls.skeleton}
						width={700}
						height={300}
					/>
					<Skeleton
						className={cls.skeleton}
						width={650}
						height={200}
					/>
				</>
			}
		/>
	);
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
	const { t } = useTranslation();

	const { className, id } = props;
	const dispatch = useAppDispatch();

	const isLoading = useSelector(getArticleDetailsIsLoading);
	const error = useSelector(getArticleDetailsError);

	useAppEffect(() => {
		void dispatch(fetchArticleById(id));
	}, [dispatch, id]);

	let content;

	if (isLoading) {
		content = <ArticleDetailsSkeleton />;
	} else if (error) {
		content = (
			<ToggleFeatures
				name={'isAppRedesigned'}
				on={
					<Text
						align={'center'}
						title={t('Произошла ошибка при загрузке статьи')}
					/>
				}
				off={
					<TextDeprecated
						align={TextAlign.CENTER}
						title={t('Произошла ошибка при загрузке статьи')}
					/>
				}
			/>
		);
	} else {
		content = (
			<ToggleFeatures
				name={'isAppRedesigned'}
				on={<Redesigned />}
				off={<Deprecated />}
			/>
		);
	}

	return (
		<DynamicModuleLoader reducers={reducers}>
			<VStack
				max
				gap={'16'}
				className={classNames(cls.ArticleDetails, {}, [className])}
			>
				{content}
			</VStack>
		</DynamicModuleLoader>
	);
});
