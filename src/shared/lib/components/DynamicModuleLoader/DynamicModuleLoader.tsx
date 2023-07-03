import { type FC, type ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { type ReduxStoreWithManager, type StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { type Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
	[name in StateSchemaKey]?: Reducer;
}

interface DynamicModuleLoaderProps {
	children: ReactNode;
	reducers: ReducersList;
	removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props: DynamicModuleLoaderProps): JSX.Element => {
    const {
        children,
        reducers,
        removeAfterUnmount
    } = props;
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager.add(name as StateSchemaKey, reducer);
            dispatch({ type: `@INIT ${name} reducer` });
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, reducer]) => {
                    store.reducerManager.remove(name as StateSchemaKey);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
        // eslint-disable-next-line
	}, []);

    return (
        <>
            {children}
        </>
    );
};
