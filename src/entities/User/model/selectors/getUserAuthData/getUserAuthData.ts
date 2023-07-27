import { type User } from '../../types/user';

import { type StateSchema } from '@/app/providers/StoreProvider';

export const getUserAuthData = (state: StateSchema): User | undefined =>
	state.user.authData;
