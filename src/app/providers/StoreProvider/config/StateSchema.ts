import {
	type AnyAction,
	type CombinedState,
	type Reducer,
	type ReducersMapObject,
} from '@reduxjs/toolkit';
import { type EnhancedStore } from '@reduxjs/toolkit/src/configureStore';
import { type AxiosInstance } from 'axios';
import { ProfileSchema } from '@/features/EditableProfileCard';

import { type ArticleDetailsSchema } from '@/entities/Article';
import { type CounterSchema } from '@/entities/Counter';
import { type UserSchema } from '@/entities/User';
import { AddArticleSchema } from '@/features/AddArticleForm';
import { type AddCommentFormSchema } from '@/features/AddCommentForm';
import { type LoginSchema } from '@/features/AuthByUsername';
import { EditArticleFormSchema } from '@/features/EditArticleForm';
import { type ScrollRestorationSchema } from '@/features/ScrollRestoration';
import { type ArticleDetailsPageSchema } from '@/pages/ArticleDetailsPage';
import { type ArticlesPageSchema } from '@/pages/ArticlesPage';
import { rtkApi } from '@/shared/api/rtkApi';

export interface StateSchema {
	counter: CounterSchema;
	user: UserSchema;
	scrollRestoration: ScrollRestorationSchema;
	[rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

	// async reducers
	loginForm?: LoginSchema;
	profile?: ProfileSchema;
	articleDetails?: ArticleDetailsSchema;
	articleDetailsPage?: ArticleDetailsPageSchema;
	addCommentForm?: AddCommentFormSchema;
	articlesPage?: ArticlesPageSchema;
	editArticleForm?: EditArticleFormSchema;
	addArticleForm?: AddArticleSchema;
}

export type StateSchemaKey = keyof StateSchema;

// export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>;
	reduce: (
		state: StateSchema,
		action: AnyAction,
	) => CombinedState<StateSchema>;
	add: (key: StateSchemaKey, reducer: Reducer) => void;
	remove: (key: StateSchemaKey) => void;
	// true - вмонтирован, false - демонтирован
	// getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
	reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
	api: AxiosInstance;
}

export interface ThunkConfig<T> {
	rejectValue: T;
	extra: ThunkExtraArg;
	state: StateSchema;
}
