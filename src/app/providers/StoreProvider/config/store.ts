import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit';
import { type EnhancedStore } from '@reduxjs/toolkit/src/configureStore';
import { type StateSchema } from './StateSchema';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManager';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>
): EnhancedStore {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState
    });

    // todo: fix it
    // @ts-expect-error
    store.reducerManager = reducerManager;

    return store;
}
