import { type AuthData } from '../../types/authData';

import { type StateSchema } from '@/app/providers/StoreProvider';

export const getUserAuthData = (state: StateSchema): AuthData | undefined => state.user.authData;
