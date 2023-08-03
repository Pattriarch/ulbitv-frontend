import { type ReducersMapObject, Store } from '@reduxjs/toolkit';
import { type ReactNode } from 'react';
import { Provider } from 'react-redux';

import { type StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';
import { SetupApiStoreType } from '@/shared/lib/tests/setupApiStore/setupApiStore';

interface StoreProviderProps {
	children?: ReactNode;
	initialState?: DeepPartial<StateSchema>;
	asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
	providedStore?: SetupApiStoreType;
}

export const StoreProvider = (props: StoreProviderProps): JSX.Element => {
	const { children, initialState, asyncReducers, providedStore } = props;

	const store = createReduxStore(
		initialState as StateSchema,
		asyncReducers as ReducersMapObject<StateSchema>,
	);

	if (providedStore) {
		return <Provider store={providedStore as unknown as Store}>{children}</Provider>;
	}

	return <Provider store={store}>{children}</Provider>;
};
