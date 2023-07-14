import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getArticles } from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import {
    getArticlesLastScrolledIndex,
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView
} from '../../model/selectors/articlesPageSelectors';
import { fetchNextArticlesPage } from 'pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { ArticleList } from 'entities/Article';
import { useTranslation } from 'react-i18next';
import { Text, TextTheme } from 'shared/ui/Text/Text';

interface ArticleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList = memo(({ className }: ArticleInfiniteListProps) => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);
    const lastScrolledIndex = useSelector(getArticlesLastScrolledIndex);

    const onLoadNextPart = useCallback(() => {
        void dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    if (error) {
        return <Text theme={TextTheme.ERROR} title={t('Произошла ошибка при загрузке данных')}/>;
    }

    return (
        <ArticleList
            isLoading={isLoading}
            view={view}
            articles={articles}
            onLoadNextPart={onLoadNextPart}
            lastScrolledIndex={lastScrolledIndex}
        />
    );
});
