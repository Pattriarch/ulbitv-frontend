import { type ReducersMapObject, Store } from '@reduxjs/toolkit';
import { type ReactNode } from 'react';
import { Provider } from 'react-redux';

import { type StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

import { SetupApiStoreType } from '@/shared/lib/tests/setupApiStore/setupApiStore';

interface StoreProviderProps {
	/** Дочерние элементы, которые будут обернуты в контекст состояния. */
	children?: ReactNode;

	/** Начальное состояние для приложения. Если не указано, будет использовано начальное состояние по умолчанию. */
	initialState?: DeepPartial<StateSchema>;

	/** Асинхронные редьюсеры, которые могут быть добавлены к текущему состоянию. */
	asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;

	/** Предоставленное хранилище, которое можно использовать вместо создания нового. */
	providedStore?: SetupApiStoreType;
}

/**
 * Обертка над стандартным Redux Provider для обеспечения динамического добавления редьюсеров и установки начального состояния.
 *
 * StoreProvider позволяет инициализировать Redux store с дополнительными редьюсерами и предоставляет интерфейс для передачи
 * существующего store через свойство `providedStore`.
 *
 * @component
 * @param {StoreProviderProps} props - Свойства компонента.
 * @param {ReactNode} [props.children] - Дочерние компоненты.
 * @param {DeepPartial<StateSchema>} [props.initialState] - Начальное состояние для Redux store.
 * @param {DeepPartial<ReducersMapObject<StateSchema>>} [props.asyncReducers] - Динамические редьюсеры для добавления.
 * @param {SetupApiStoreType} [props.providedStore] - Существующий Redux store для использования.
 * @returns {JSX.Element} Обернутые дочерние компоненты с предоставленным Redux store.
 *
 * @example
 * <StoreProvider initialState={myInitialState} asyncReducers={myAsyncReducers}>
 *   <MyApp />
 * </StoreProvider>
 */
export const StoreProvider = (props: StoreProviderProps): JSX.Element => {
	const { children, initialState, asyncReducers, providedStore } = props;

	const store = createReduxStore(
		initialState as StateSchema,
		asyncReducers as ReducersMapObject<StateSchema>,
	);

	if (providedStore) {
		return (
			<Provider store={providedStore as unknown as Store}>
				{children}
			</Provider>
		);
	}

	return <Provider store={store}>{children}</Provider>;
};
