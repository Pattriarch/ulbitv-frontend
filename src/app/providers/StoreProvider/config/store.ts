import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit';
import { type EnhancedStore } from '@reduxjs/toolkit/src/configureStore';
import { type StateSchema } from './StateSchema';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUsername';

export function createReduxStore(initialState?: StateSchema): EnhancedStore {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer
    };

    return configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState
    });
}
