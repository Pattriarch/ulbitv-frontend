import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
	getArticlesLastScrolledIndex,
	getArticlesPageError,
	getArticlesPageIsLoading,
	getArticlesPageView,
} from '../../../../pages/ArticlesPage/model/selectors/articlesPageSelectors';
import {
	articlesPageActions,
	getArticles,
} from '../../../../pages/ArticlesPage/model/slices/articlesPageSlice';

import { ArticleList } from '@/entities/Article';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleInfiniteListProps {
	className?: string;
	virtualized?: boolean;
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
	const { className, virtualized } = props;
	const { t } = useTranslation();

	const dispatch = useAppDispatch();
	const articles = useSelector(getArticles.selectAll);
	const isLoading = useSelector(getArticlesPageIsLoading);
	const error = useSelector(getArticlesPageError);
	const view = useSelector(getArticlesPageView);
	const lastScrolledIndex = useSelector(getArticlesLastScrolledIndex);

	const setLastScrolledIndex = useCallback(
		(index: number | undefined) => {
			if (index) {
				void dispatch(articlesPageActions.setLastScrolledIndex(index));
			}
		},
		[dispatch],
	);

	if (error) {
		return (
			<ToggleFeatures
				name={'isAppRedesigned'}
				on={
					<Text
						variant={'error'}
						title={t('Произошла ошибка при загрузке данных')}
					/>
				}
				off={
					<TextDeprecated
						theme={TextTheme.ERROR}
						title={t('Произошла ошибка при загрузке данных')}
					/>
				}
			/>
		);
	}

	return (
		<ArticleList
			className={className}
			isLoading={isLoading}
			view={view}
			articles={articles}
			lastScrolledIndex={lastScrolledIndex}
			setLastScrolledIndex={setLastScrolledIndex}
			virtualized={virtualized}
		/>
	);
});
