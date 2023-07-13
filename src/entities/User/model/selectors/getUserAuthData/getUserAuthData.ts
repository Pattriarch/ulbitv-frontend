import { type StateSchema } from 'app/providers/StoreProvider';
import { type AuthData } from '../../types/authData';

export const getUserAuthData = (state: StateSchema): AuthData | undefined => state.user.authData;
