import React, { memo } from 'react';
import { useParams } from 'react-router-dom';

import { articleDetailsPageReducer } from '../../model/slices';
import { ArticleDetailsComments } from '../../ui/ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

import { ArticleDetails } from '@/entities/Article';
import { Counter } from '@/entities/Counter';
import { ArticleRating } from '@/features/articleRating';
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
	DynamicModuleLoader,
	type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getFeatureFlag } from '@/shared/lib/features';
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
	const { id } = useParams<{ id: string }>();
	const isArticleRatingEnabled = getFeatureFlag('isArticleRatingEnabled');
	const isCounterEnabled = getFeatureFlag('isCounterEnabled');

	if (!id) {
		return null;
	}

	return (
		<DynamicModuleLoader reducers={reducers}>
			<Page
				className={classNames(cls.ArticleDetailsPage, {}, [className])}
			>
				<ArticleDetailsPageHeader />
				<ArticleDetails id={id} />
				{isCounterEnabled && <Counter />}
				{isArticleRatingEnabled && <ArticleRating articleId={id} />}
				<ArticleRecommendationsList />
				<ArticleDetailsComments id={id} />
			</Page>
		</DynamicModuleLoader>
	);
});

export default ArticleDetailsPage;
