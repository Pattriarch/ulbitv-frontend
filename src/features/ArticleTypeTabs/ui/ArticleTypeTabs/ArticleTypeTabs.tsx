import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleType } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import {
	type TabItem,
	Tabs as TabsDeprecated,
} from '@/shared/ui/deprecated/Tabs';
import { Tabs } from '@/shared/ui/redesigned/Tabs';

interface ArticleTypeTabsProps {
	/** Дополнительные стили компонента. */
	className?: string;

	/** Текущий выбранный тип статей. */
	value: ArticleType;

	/**
	 * Callback-функция, вызываемая при смене выбранной вкладки.
	 *
	 * @callback onChangeTab
	 * @param {TabItem<ArticleType>} tab - Выбранная вкладка.
	 * @returns {void}
	 */
	onChangeTab: (tab: TabItem<ArticleType>) => void;
}

/**
 * Компонент для отображения вкладок выбора типа статей.
 *
 * @component
 * @param {ArticleTypeTabsProps} props - Свойства компонента ArticleTypeTabs.
 * @returns {JSX.Element} Компонент для отображения вкладок выбора типа статей.
 */
export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
	const { className, value, onChangeTab } = props;
	const { t } = useTranslation();

	const typeTabs = useMemo<TabItem<ArticleType>[]>(
		() => [
			{
				value: ArticleType.ALL,
				content: t('Все статьи'),
			},
			{
				value: ArticleType.IT,
				content: t('Айти'),
			},
			{
				value: ArticleType.COMPUTER_SCIENCE,
				content: t('Информатика'),
			},
			{
				value: ArticleType.ECONOMICS,
				content: t('Экономика'),
			},
		],
		[t],
	);

	return (
		<ToggleFeatures
			name={'isAppRedesigned'}
			on={
				<Tabs
					direction={'column'}
					tabs={typeTabs}
					value={value}
					onTabClick={onChangeTab}
					className={classNames('', {}, [className])}
				/>
			}
			off={
				<TabsDeprecated
					tabs={typeTabs}
					value={value}
					onTabClick={onChangeTab}
					className={classNames('', {}, [className])}
				/>
			}
		/>
	);
});
