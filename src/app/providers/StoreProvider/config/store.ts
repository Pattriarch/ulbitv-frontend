import {
	type CombinedState,
	configureStore,
	type Reducer,
	type ReducersMapObject,
} from '@reduxjs/toolkit';

import { type StateSchema, type ThunkExtraArg } from './StateSchema';
import { createReducerManager } from './reducerManager';

import { counterReducer } from '@/entities/Counter';
import { userReducer } from '@/entities/User';
import { scrollRestorationReducer } from '@/features/ScrollRestoration';
import { $api } from '@/shared/api/api';
import { rtkApi } from '@/shared/api/rtkApi';

/**
 * Создает и конфигурирует Redux store, включая динамические редьюсеры.
 *
 * Этот store основан на базовых редьюсерах, таких, как counterReducer, userReducer и других.
 * Также он позволяет динамически добавлять дополнительные редьюсеры через параметр asyncReducers.
 *
 * @function
 * @param {StateSchema} [initialState] - Исходное состояние для store.
 * @param {ReducersMapObject<StateSchema>} [asyncReducers] - Динамические редьюсеры, которые могут быть добавлены на лету.
 * @returns {Store} Настроенный Redux store.
 *
 * @example
 * 	const store = createReduxStore(
 * 		initialState,
 * 		asyncReducers
 * 	);
 */
export function createReduxStore(
	initialState?: StateSchema,
	asyncReducers?: ReducersMapObject<StateSchema>,
) {
	const rootReducers: ReducersMapObject<StateSchema> = {
		...asyncReducers,
		counter: counterReducer,
		user: userReducer,
		scrollRestoration: scrollRestorationReducer,
		[rtkApi.reducerPath]: rtkApi.reducer,
	};

	const reducerManager = createReducerManager(rootReducers);

	const extraArg: ThunkExtraArg = {
		api: $api,
	};

	const store = configureStore({
		reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
		devTools: __IS_DEV__,
		preloadedState: initialState,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				thunk: {
					extraArgument: extraArg,
				},
			}).concat(rtkApi.middleware),
	});

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-expect-error
	store.reducerManager = reducerManager;

	return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
