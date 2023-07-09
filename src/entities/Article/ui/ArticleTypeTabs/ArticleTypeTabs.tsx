import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { type TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { ArticleType } from 'entities/Article';

interface ArticleTypeTabsProps {
	className?: string;
	value: ArticleType;
	onChangeTab: (tab: TabItem<ArticleType>) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const { className, value, onChangeTab } = props;
    const { t } = useTranslation();

    const typeTabs = useMemo<TabItem<ArticleType>[]>(() => [
        {
            value: ArticleType.ALL,
            content: t('Все статьи')
        },
        {
            value: ArticleType.IT,
            content: t('Айти')
        },
        {
            value: ArticleType.COMPUTER_SCIENCE,
            content: t('Информатика')
        },
        {
            value: ArticleType.ECONOMICS,
            content: t('Экономика')
        }
    ], [t]);

    return (
        <Tabs
            tabs={typeTabs}
            value={value}
            onTabClick={onChangeTab}
            className={classNames('', {}, [className])}
        />
    );
});
