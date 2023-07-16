import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import { type HTMLAttributeAnchorTarget, memo, useCallback } from 'react';
import { type Article, type ArticleTextBlock } from '../../model/types/article';
import { Text } from 'shared/ui/Text/Text';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { Card } from 'shared/ui/Card/Card';
import { useHover } from 'shared/lib/hooks/useHover/useHover';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { ArticleTextBlockComponent } from '../../ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
import { RoutePath } from 'app/config/routeConfig/routes';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { ArticleBlockType, ArticleView } from '../../consts/articleConsts';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
    index?: number;
    setLastScrolledIndex?: (index: number) => void;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className,
        article,
        target,
        view,
        index,
        setLastScrolledIndex
    } = props;

    const { t } = useTranslation();
    const [_, bindHover] = useHover();

    const handleButtonClick = useCallback(() => {
            if (setLastScrolledIndex && index) {
                setLastScrolledIndex(index);
            }
    }, [index, setLastScrolledIndex]);

    const types = <Text text={article?.type?.join(', ')} className={cls.types}/>;
    const views = (
        <>
            <Text text={String(article.views)} className={cls.views}/>
            <Icon Svg={EyeIcon}/>
        </>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article?.blocks?.find(
            block => block.type === ArticleBlockType.TEXT
        ) as ArticleTextBlock;

        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar size={30} src={article?.user?.avatar}/>
                        <Text text={article?.user?.username} className={cls.username}/>
                        <Text text={article.createdAt} className={cls.date}/>
                    </div>
                    <Text title={article.title} className={cls.title}/>
                    {types}
                    <img src={article.img} className={cls.img} alt={article.title}/>
                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} className={cls.textBlock}/>
                    )}
                    <div className={cls.footer}>
                        <AppLink
                            target={target}
                            to={RoutePath.article_details + (article?.id || '-1')}
                        >
                            <Button
                                type={'button'}
                                theme={ButtonTheme.OUTLINE}
                                onClick={handleButtonClick}
                            >
                                {t('Читать далее...')}
                            </Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            target={target}
            onClick={handleButtonClick}
            to={RoutePath.article_details + (article?.id || '-1')}
            className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
            {...bindHover}
        >
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <img src={article.img} className={cls.img} alt={article.title}/>
                    <Text text={article.createdAt} className={cls.date}/>
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text text={article.title} className={cls.title}/>
            </Card>
        </AppLink>
    );
});
