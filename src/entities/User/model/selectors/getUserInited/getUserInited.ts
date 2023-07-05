import { type StateSchema } from 'app/providers/StoreProvider';
import { User } from 'entities/User';

export const getUserInited = (state: StateSchema): boolean => state.user._inited;
