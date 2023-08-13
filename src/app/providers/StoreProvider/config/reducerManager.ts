import {
	type AnyAction,
	combineReducers,
	type Reducer,
	type ReducersMapObject,
} from '@reduxjs/toolkit';

import { type ReducerManager, type StateSchemaKey } from './StateSchema';

import { type StateSchema } from '@/app/providers/StoreProvider';

/**
 * Создает и управляет динамическим списком редьюсеров для Redux.
 *
 * `Reducer manager` позволяет динамически добавлять и удалять редьюсеры на лету. Это может быть полезно
 * при реализации функций, таких как разделение кода (code-splitting) или загрузка функциональности приложения
 * по мере необходимости (lazy-loading features).
 *
 * @function
 * @param {ReducersMapObject<StateSchema>} initialReducers - Исходные редьюсеры для инициализации.
 * @returns {ReducerManager} Объект, предоставляющий методы для управления редьюсерами.
 *
 * @example
 * const manager = createReducerManager(initialReducers);
 * manager.add('newFeature', newFeatureReducer);
 * manager.remove('oldFeature');
 */
export function createReducerManager(
	initialReducers: ReducersMapObject<StateSchema>,
): ReducerManager {
	const reducers = { ...initialReducers };

	let combinedReducer = combineReducers(reducers);

	let keysToRemove: StateSchemaKey[] = [];

	return {
		getReducerMap: () => reducers,
		reduce: (state: StateSchema, action: AnyAction) => {
			if (keysToRemove.length > 0) {
				state = { ...state };
				for (const key of keysToRemove) {
					delete state[key];
				}
				keysToRemove = [];
			}

			return combinedReducer(state, action);
		},

		add: (key: StateSchemaKey, reducer: Reducer) => {
			if (!key || reducers[key]) {
				return;
			}
			reducers[key] = reducer;

			combinedReducer = combineReducers(reducers);
		},

		remove: (key: StateSchemaKey) => {
			if (!key || !reducers[key]) {
				return;
			}
			delete reducers[key];
			keysToRemove.push(key);

			combinedReducer = combineReducers(reducers);
		},
	};
}
