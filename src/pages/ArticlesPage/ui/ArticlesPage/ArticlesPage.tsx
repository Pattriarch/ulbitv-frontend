import React, { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { articlesPageReducer } from '../../model/slices/articlesPageSlice';
import { ArticleInfiniteList } from '../../ui/ArticleInfiniteList/ArticleInfiniteList';
import { ArticlesDetailsPageFilters } from '../ArticlesDetailsPageFilters/ArticlesDetailsPageFilters';

import { ArticlePageGreeting } from '@/features/articlePageGreeting';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
	DynamicModuleLoader,
	type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { VStack } from '@/shared/ui/Stack';
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

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
			<Page
				data-testid={'ArticlesPage'}
				onScrollEnd={onLoadNextPart}
				className={classNames('', {}, [className])}
			>
				<VStack gap={'8'} max align={'stretch'}>
					<ArticlesDetailsPageFilters />
					<ArticleInfiniteList virtualized={false} />
					<ArticlePageGreeting />
				</VStack>
			</Page>
		</DynamicModuleLoader>
	);
});

export default ArticlesPage;
