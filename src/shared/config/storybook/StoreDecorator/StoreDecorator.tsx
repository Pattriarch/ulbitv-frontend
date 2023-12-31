import { type ReducersMapObject } from '@reduxjs/toolkit';
import { type StoryFn } from '@storybook/react';

import { type StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { articleDetailsReducer } from '@/entities/Article/testing';
// eslint-disable-next-line ulbitv-fsd/layer-imports-validator
import { addArticleFormReducer } from '@/features/AddArticleForm';
import { addCommentFormReducer } from '@/features/AddCommentForm/testing';
import { loginReducer } from '@/features/AuthByUsername/testing';
// eslint-disable-next-line ulbitv-fsd/layer-imports-validator
import { editArticleFormReducer } from '@/features/EditArticleForm';
import { profileReducer } from '@/features/EditableProfileCard/testing';
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/testing';
// eslint-disable-next-line ulbitv-fsd/layer-imports-validator
import { articlesPageReducer } from '@/pages/ArticlesPage';
import { type ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
	loginForm: loginReducer,
	profile: profileReducer,
	articleDetails: articleDetailsReducer,
	editArticleForm: editArticleFormReducer,
	addCommentForm: addCommentFormReducer,
	addArticleForm: addArticleFormReducer,
	articlesPage: articlesPageReducer,
	articleDetailsPage: articleDetailsPageReducer,
};

export const StoreDecorator =
	(
		state: DeepPartial<StateSchema>,
		asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
	) =>
	(Story: StoryFn) =>
		(
			<StoreProvider
				initialState={state}
				asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
			>
				<Story />
			</StoreProvider>
		);
