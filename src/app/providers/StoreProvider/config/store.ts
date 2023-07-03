import { type CombinedState, configureStore, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit';
import { type StateSchema, type ThunkExtraArg } from './StateSchema';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManager';
import { $api } from 'shared/api/api';
import { type To } from '@remix-run/router';
import { type NavigateOptions } from 'react-router/dist/lib/context';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: (to: To, options?: NavigateOptions) => void
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer
    };

    const reducerManager = createReducerManager(rootReducers);

    const extraArg: ThunkExtraArg = {
        api: $api,
        navigate
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg
            }
        })
    });

    // todo: fix it
    // @ts-expect-error
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
