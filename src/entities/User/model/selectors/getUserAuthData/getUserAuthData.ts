import { type StateSchema } from 'app/providers/StoreProvider';
import { type User } from 'entities/User';

export const getUserAuthData = (state: StateSchema): User | undefined => state.user.authData;
