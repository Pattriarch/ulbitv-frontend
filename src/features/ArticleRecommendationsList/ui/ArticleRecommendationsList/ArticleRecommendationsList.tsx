import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useArticleRecommendationsList } from '../../api/articleRecommendationsList';

import { ArticleList, ArticleView } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Loader } from '@/shared/ui/deprecated/Loader';
import {
	Text as TextDeprecated,
	TextSize,
	TextTheme,
} from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

import cls from './ArticleRecommendationsList.module.scss';

interface ArticleRecommendationsListProps {
	className?: string;
}

export const ArticleRecommendationsList = memo(
	(props: ArticleRecommendationsListProps) => {
		const { className } = props;
		const { t } = useTranslation();
		const {
			data: articles,
			isLoading,
			error,
		} = useArticleRecommendationsList(3);

		if (isLoading) {
			return <Loader />;
		}

		if (error || !articles) {
			return (
				<ToggleFeatures
					name={'isAppRedesigned'}
					on={
						<Text
							variant={'error'}
							title={t('Произошла ошибка при загрузке данных')}
						/>
					}
					off={
						<TextDeprecated
							theme={TextTheme.ERROR}
							title={t('Произошла ошибка при загрузке данных')}
						/>
					}
				/>
			);
		}

		return (
			<VStack
				data-testid={'ArticleRecommendationsList'}
				gap={'8'}
				max
				className={classNames(cls.ArticleRecommendationsList, {}, [
					className,
				])}
			>
				<ToggleFeatures
					name={'isAppRedesigned'}
					on={<Text size={'l'} title={t('Рекомендуем')} />}
					off={
						<TextDeprecated
							size={TextSize.L}
							title={t('Рекомендуем')}
						/>
					}
				/>
				<ArticleList
					virtualized={false}
					isLoading={isLoading}
					className={cls.recommendations}
					view={ArticleView.SMALL}
					articles={articles}
					target={'_blank'}
				/>
			</VStack>
		);
	},
);
