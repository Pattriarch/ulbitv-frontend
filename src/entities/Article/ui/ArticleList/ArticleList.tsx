import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { type FC, type HTMLAttributeAnchorTarget, memo, useEffect, useRef } from 'react';
import { type Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../../ui/ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import { useTranslation } from 'react-i18next';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { Virtuoso, VirtuosoGrid, type VirtuosoGridHandle } from 'react-virtuoso';
import { ArticlesPageFilters } from 'pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
    onLoadNextPart?: () => void;
    lastScrolledIndex?: number;
}

const Header = () => <ArticlesPageFilters/>;

const getBigSkeletons = () => new Array(3)
    .fill(0)
    .map((_, index) => (
        <ArticleListItemSkeleton
            view={ArticleView.BIG}
            className={cls.card}
            key={index}
        />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        view = ArticleView.SMALL,
        isLoading,
        target,
        onLoadNextPart,
        lastScrolledIndex
    } = props;

    const { t } = useTranslation();
    const virtuosoGridRef = useRef<VirtuosoGridHandle>(null);

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        if (view === ArticleView.SMALL) {
            timeout = setTimeout(() => {
                if (virtuosoGridRef.current && lastScrolledIndex) {
                    virtuosoGridRef.current.scrollToIndex(lastScrolledIndex);
                }
            }, 300);
        }

        return () => clearTimeout(timeout);
    }, [lastScrolledIndex, view]);

    useEffect(() => {
        window.addEventListener('error', e => {
            if (e.message === 'ResizeObserver loop limit exceeded') {
                const resizeObserverErrDiv = document.getElementById(
                    'webpack-dev-server-client-overlay-div'
                );
                const resizeObserverErr = document.getElementById(
                    'webpack-dev-server-client-overlay'
                );
                if (resizeObserverErr) {
                    resizeObserverErr.setAttribute('style', 'display: none');
                }
                if (resizeObserverErrDiv) {
                    resizeObserverErrDiv.setAttribute('style', 'display: none');
                }
            }
        });
    }, []);

    const renderArticle = (index: number, article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            className={cls.card}
            target={target}
            key={article.id}
            index={index}
        />
    );

    const Footer = memo(() => {
        if (isLoading) {
            return (
                <div className={cls.skeleton}>
                    {getBigSkeletons()}
                </div>
            );
        }
        return null;
    });

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text size={TextSize.L} title={t('Статьи не найдены')}/>
            </div>
        );
    }

    // можно вынести за пределы компонента
    const ItemContainerComp: FC<{ height: number, width: number, index: number, }> = ({ height, width, index }) => (
        <div className={cls.ItemContainer}>
            <ArticleListItemSkeleton key={index} view={view} className={cls.card}/>
        </div>
    );

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {view === ArticleView.BIG
                ? (
                    <Virtuoso
                        style={{ height: '100%' }}
                        data={articles}
                        itemContent={renderArticle}
                        endReached={onLoadNextPart}
                        initialTopMostItemIndex={lastScrolledIndex}
                        components={{
                            Header,
                            Footer
                        }}
                    />
                )
                : (
                    <>
                        <VirtuosoGrid
                            ref={virtuosoGridRef}
                            totalCount={articles.length}
                            components={{
                                Header,
                                ScrollSeekPlaceholder: ItemContainerComp
                            }}
                            data={articles}
                            endReached={onLoadNextPart}
                            itemContent={renderArticle}
                            listClassName={cls.itemsWrapper}
                            scrollSeekConfiguration={{
                                enter: (velocity) => Math.abs(velocity) > 200,
                                exit: (velocity) => Math.abs(velocity) < 30
                            }}
                        />
                    </>
                )}
        </div>
    );
});
