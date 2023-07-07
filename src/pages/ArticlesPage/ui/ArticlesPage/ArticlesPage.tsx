import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { ArticleList, type ArticleView, ArticleViewSelector } from 'entities/Article';
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlesPageActions, articlesPageReducer, getArticles } from '../../model/slices/articlesPageSlice';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { useSelector } from 'react-redux';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView
} from '../../model/selectors/articlesPageSelectors';

export interface ArticlesPageProps {
	className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);

    const onChangeView = useCallback((view: ArticleView) => {
        void dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    useInitialEffect(() => {
        void dispatch(fetchArticlesList());
        void dispatch(articlesPageActions.initState());
    });

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames('', {}, [className])}>
                <ArticleViewSelector view={view} onViewClick={onChangeView}/>
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}/>
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
