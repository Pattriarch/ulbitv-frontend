import { type ReducersMapObject } from '@reduxjs/toolkit';
import { type StoryFn } from '@storybook/react';

import { type StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { articleDetailsReducer } from '@/entities/Article/testing';
import { addCommentFormReducer } from '@/features/AddCommentForm/testing';
import { loginReducer } from '@/features/AuthByUsername/testing';
import { profileReducer } from '@/features/EditableProfileCard/testing';
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/testing';
import { type ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlesPageReducer } from '@/pages/ArticlesPage/model/slices/articlesPageSlice';
import { editArticleFormReducer } from '@/features/EditArticleForm';
import { addArticleFormReducer } from '@/features/AddArticleForm';

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
