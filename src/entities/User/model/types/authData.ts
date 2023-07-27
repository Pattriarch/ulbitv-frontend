import { type UserRole } from '../../consts/userConsts';

import { FeatureFlags } from '@/shared/types/featureFlags';

export interface AuthData {
	id: string;
	username: string;
	avatar?: string;
	roles?: UserRole[];
	features?: FeatureFlags;
}

export interface UserSchema {
	authData?: AuthData;

	_inited: boolean;
}
