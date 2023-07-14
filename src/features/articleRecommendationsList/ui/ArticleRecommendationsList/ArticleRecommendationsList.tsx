import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ArticleRecommendationsList.module.scss';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { ArticleList, ArticleView } from 'entities/Article';
import { Loader } from 'shared/ui/Loader/Loader';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsList';
import { VStack } from 'shared/ui/Stack';

interface ArticleRecommendationsListProps {
    className?: string;
    filters?: boolean;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className, filters = true } = props;
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
        <VStack gap={'8'} max>
            <Text
                size={TextSize.L}
                title={t('Рекомендуем')}
            />
            <ArticleList
                filters={filters}
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
