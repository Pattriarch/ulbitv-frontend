import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import React, { memo } from 'react';
import { ArticleDetails } from '@/entities/Article';
import { useParams } from 'react-router-dom';
import { DynamicModuleLoader, type ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page';
import { articleDetailsPageReducer } from '../../model/slices';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList';
import { ArticleDetailsComments } from '../../ui/ArticleDetailsComments/ArticleDetailsComments';
import { ArticlesPageFilters } from '@/pages/ArticlesPage';
import { ArticleRating } from '@/features/articleRating';

export interface ArticleDetailsPageProps {
    className?: string;
    id?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer
};

const ArticleDetailsPage = memo(({ className }: ArticleDetailsPageProps) => {
    const { id } = useParams<{ id: string, }>();

    if (!id) {
        return null;
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <ArticleDetailsPageHeader/>
                <ArticleDetails id={id}/>
                <ArticleRating articleId={id} />
                <ArticleRecommendationsList Header={() => <ArticlesPageFilters/>}/>
                <ArticleDetailsComments id={id}/>
            </Page>
        </DynamicModuleLoader>
    );
});

export default ArticleDetailsPage;
