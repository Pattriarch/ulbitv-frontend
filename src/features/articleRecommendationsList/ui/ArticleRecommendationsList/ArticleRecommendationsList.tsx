import { useTranslation } from 'react-i18next';
import { memo, type ReactNode } from 'react';
import cls from './ArticleRecommendationsList.module.scss';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { ArticleList, ArticleView } from 'entities/Article';
import { Loader } from 'shared/ui/Loader/Loader';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsList';
import { VStack } from 'shared/ui/Stack';
import { classNames } from 'shared/lib/classNames/classNames';

interface ArticleRecommendationsListProps {
    className?: string;
    Header?: () => ReactNode;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className, Header } = props;
    const { t } = useTranslation();
    const { data: articles, isLoading, error } = useArticleRecommendationsList(3);

    if (isLoading) {
        return <Loader/>;
    }

    if (error || !articles) {
        return <Text
            theme={TextTheme.ERROR}
            title={t('Произошла ошибка при загрузке данных')}
        />;
    }

    return (
        <VStack gap={'8'} max className={classNames(cls.ArticleRecommendationsList, {}, [className])}>
            <Text
                size={TextSize.L}
                title={t('Рекомендуем')}
            />
            <ArticleList
                Header={Header}
                virtualized={false}
                isLoading={isLoading}
                className={cls.recommendations}
                view={ArticleView.SMALL}
                articles={articles}
                target={'_blank'}
            />
        </VStack>
    );
});
