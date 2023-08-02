import { type Reducer } from '@reduxjs/toolkit';
import { type ReactNode, useEffect } from 'react';
import { useStore } from 'react-redux';

import { useAppDispatch } from '../../hooks/useAppDispatch/useAppDispatch';

import {
	type ReduxStoreWithManager,
	type StateSchema,
	type StateSchemaKey,
} from '@/app/providers/StoreProvider';
import { useAppEffect } from '@/shared/lib/hooks/useAppEffect/useAppEffect';

export type ReducersList = {
	// явно указываем, что по ключу мы хотим получить reducer из StateSchema
	[name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
};

interface DynamicModuleLoaderProps {
	children: ReactNode;
	reducers: ReducersList;
	removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader = (
	props: DynamicModuleLoaderProps,
): JSX.Element => {
	const { children, reducers, removeAfterUnmount = true } = props;
	const store = useStore() as ReduxStoreWithManager;
	const dispatch = useAppDispatch();

	useAppEffect(() => {
		// const mountedReducers = store.reducerManager.getMountedReducers();
		const mountedReducers = store.reducerManager.getReducerMap();

		Object.entries(reducers).forEach(([name, reducer]) => {
			// const mounted = mountedReducers[name as StateSchemaKey];
			// Add new reducer if not exists
			const mounted = mountedReducers[name as StateSchemaKey];
			if (!mounted) {
				store.reducerManager.add(name as StateSchemaKey, reducer);
				dispatch({ type: `@INIT ${name} reducer` });
			}
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

	return <>{children}</>;
};
