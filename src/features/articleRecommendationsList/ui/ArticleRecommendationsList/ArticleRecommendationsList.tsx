import {memo} from 'react';
import {useTranslation} from 'react-i18next';

import {useArticleRecommendationsList} from '../../api/articleRecommendationsList';

import {ArticleList, ArticleView} from '@/entities/Article';
import {classNames} from '@/shared/lib/classNames/classNames';
import {Loader} from '@/shared/ui/Loader';
import {VStack} from '@/shared/ui/Stack';
import {Text, TextSize, TextTheme} from '@/shared/ui/Text';

import cls from './ArticleRecommendationsList.module.scss';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const {className} = props;
    const {t} = useTranslation();
    const {data: articles, isLoading, error} = useArticleRecommendationsList(3);

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
        <VStack data-testid={'ArticleRecommendationsList'} gap={'8'} max
                className={classNames(cls.ArticleRecommendationsList, {}, [className])}>
            <Text
                size={TextSize.L}
                title={t('Рекомендуем')}
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
});
