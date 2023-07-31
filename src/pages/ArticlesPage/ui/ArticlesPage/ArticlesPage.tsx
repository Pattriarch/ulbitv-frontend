import React, { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { articlesPageReducer } from '../../model/slices/articlesPageSlice';
import { ArticleInfiniteList } from '../../ui/ArticleInfiniteList/ArticleInfiniteList';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { FiltersContainer } from '../FiltersContainer/FiltersContainer';
import { ViewSelectorContainer } from '../ViewSelectorContainer/ViewSelectorContainer';

import { ArticlePageGreeting } from '@/features/articlePageGreeting';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
	DynamicModuleLoader,
	type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Page } from '@/widgets/Page';

export interface ArticlesPageProps {
	className?: string;
}

const reducers: ReducersList = {
	articlesPage: articlesPageReducer,
};

const ArticlesPage = memo(({ className }: ArticlesPageProps) => {
	const dispatch = useAppDispatch();
	const [searchParams] = useSearchParams();

	useInitialEffect(() => {
		void dispatch(initArticlesPage(searchParams));
	});

	const onLoadNextPart = useCallback(() => {
		void dispatch(fetchNextArticlesPage());
	}, [dispatch]);

	const content = (
		<ToggleFeatures
			name={'isAppRedesigned'}
			on={
				<StickyContentLayout
					left={<ViewSelectorContainer />}
					right={<FiltersContainer />}
					content={
						<Page
							data-testid={'ArticlesPageRedesigned'}
							onScrollEnd={onLoadNextPart}
							className={classNames('', {}, [className])}
						>
							<ArticleInfiniteList virtualized={false} />
							<ArticlePageGreeting />
						</Page>
					}
				/>
			}
			off={
				<Page
					data-testid={'ArticlesPage'}
					onScrollEnd={onLoadNextPart}
					className={classNames('', {}, [className])}
				>
					<VStack gap={'8'} max align={'stretch'}>
						<ArticlesPageFilters />
						<ArticleInfiniteList virtualized={false} />
						<ArticlePageGreeting />
					</VStack>
				</Page>
			}
		/>
	);

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
			{content}
		</DynamicModuleLoader>
	);
});

export default ArticlesPage;
