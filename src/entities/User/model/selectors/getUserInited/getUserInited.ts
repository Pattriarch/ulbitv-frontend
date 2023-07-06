import { type StateSchema } from 'app/providers/StoreProvider';

export const getUserInited = (state: StateSchema): boolean => state.user._inited;
