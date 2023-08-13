import {
	type AnyAction,
	type CombinedState,
	type Reducer,
	type ReducersMapObject,
} from '@reduxjs/toolkit';
import { type EnhancedStore } from '@reduxjs/toolkit/src/configureStore';
import { type AxiosInstance } from 'axios';

import { type ArticleDetailsSchema } from '@/entities/Article';
import { type CounterSchema } from '@/entities/Counter';
import { type UserSchema } from '@/entities/User';
import { AddArticleSchema } from '@/features/AddArticleForm';
import { type AddCommentFormSchema } from '@/features/AddCommentForm';
import { type LoginSchema } from '@/features/AuthByUsername';
import { EditArticleFormSchema } from '@/features/EditArticleForm';
import { ProfileSchema } from '@/features/EditableProfileCard';
import { type ScrollRestorationSchema } from '@/features/ScrollRestoration';
import { type ArticleDetailsPageSchema } from '@/pages/ArticleDetailsPage';
import { type ArticlesPageSchema } from '@/pages/ArticlesPage';
import { rtkApi } from '@/shared/api/rtkApi';

// Главная схема состояния для Redux Store, где необязательные редьюсеры могут подключаться асинхронно
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

// Получение типа ключа основной схемы
export type StateSchemaKey = keyof StateSchema;

// Интерфейс для управления редьюсерами в Redux Store
export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>;
	reduce: (
		state: StateSchema,
		action: AnyAction,
	) => CombinedState<StateSchema>;
	add: (key: StateSchemaKey, reducer: Reducer) => void;
	remove: (key: StateSchemaKey) => void;
}

// Расширенный тип Redux Store, включающий в себя Manager для управления редьюсерами
export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
	reducerManager: ReducerManager;
}

// Дополнительный параметр для Redux Thunk, в данном случае для выполнения HTTP-запросов
export interface ThunkExtraArg {
	api: AxiosInstance;
}

// Конфигурация для Redux Thunk, T - тип значения, что будет возвращен в случае ошибки
export interface ThunkConfig<T> {
	rejectValue: T;
	extra: ThunkExtraArg;
	state: StateSchema;
}
