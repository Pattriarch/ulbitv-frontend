import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { articleDetailsPageReducer } from '../../model/slices';
import { ArticleDetailsComments } from '../../ui/ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

import { ArticleDetails } from '@/entities/Article';
import { ArticleRating } from '@/features/ArticleRating';
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
	DynamicModuleLoader,
	type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/deprecated/Card';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { AdditionalInfoContainer } from '@/widgets/AdditionalInfoContainer';
import { ArticleDetailsContainer } from '@/widgets/ArticleDetailsContainer';
import { Page } from '@/widgets/Page';

import cls from './ArticleDetailsPage.module.scss';

export interface ArticleDetailsPageProps {
	className?: string;
	id?: string;
}

const reducers: ReducersList = {
	articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = memo(({ className }: ArticleDetailsPageProps) => {
	const { t } = useTranslation();
	const { id } = useParams<{ id: string, }>();

	if (!id) {
		return null;
	}

	return (
		<DynamicModuleLoader reducers={reducers}>
			<ToggleFeatures
				name={'isAppRedesigned'}
				on={
					<StickyContentLayout
						content={
							<Page
								className={classNames(
									cls.ArticleDetailsPage,
									{},
									[className],
								)}
							>
								<VStack gap={'16'}>
									<ArticleDetailsContainer />
									<ArticleRating articleId={id} />
									<ArticleRecommendationsList />
									<ArticleDetailsComments id={id} />
								</VStack>
							</Page>
						}
						right={<AdditionalInfoContainer />}
					/>
				}
				off={
					<Page
						className={classNames(cls.ArticleDetailsPage, {}, [
							className,
						])}
					>
						<ArticleDetailsPageHeader />
						<ArticleDetails id={id} />
						<ToggleFeatures
							name={'isArticleRatingEnabled'}
							on={<ArticleRating articleId={id} />}
							off={
								<Card>
									{t('Оценка статей скоро появится!')}
								</Card>
							}
						/>
						<ArticleRecommendationsList />
						<ArticleDetailsComments id={id} />
					</Page>
				}
			/>
		</DynamicModuleLoader>
	);
});

export default ArticleDetailsPage;
