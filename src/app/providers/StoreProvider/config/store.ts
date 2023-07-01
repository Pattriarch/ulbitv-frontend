import { configureStore } from '@reduxjs/toolkit';
import { type EnhancedStore } from '@reduxjs/toolkit/src/configureStore';
import { type StateSchema } from './StateSchema';
import { counterReducer } from 'entities/Counter/model/slice/counterSlice';

export function createReduxStore(initialState?: StateSchema): EnhancedStore {
    return configureStore<StateSchema>({
        reducer: {
            counter: counterReducer
        },
        devTools: __IS_DEV__,
        preloadedState: initialState
    });
}
