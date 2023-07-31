import { LOCAL_STORAGE_LAST_DESIGN_KEY } from '@/shared/const/localStorage';
import { FeatureFlags } from '@/shared/types/featureFlags';

const defaultFeatures: FeatureFlags = {
	isAppRedesigned:
		localStorage.getItem(LOCAL_STORAGE_LAST_DESIGN_KEY) === 'new',
};

// фичи не меняются в ходе сессии, их делать реактивными необязательно
let featureFlags: FeatureFlags = {
	...defaultFeatures,
};

export function setFeatureFlags(newFeatureFlags?: FeatureFlags) {
	if (newFeatureFlags) {
		featureFlags = newFeatureFlags;
	}
}

export function getFeatureFlag(flag: keyof FeatureFlags) {
	return featureFlags[flag];
}

export function getAllFeatureFlags() {
	return featureFlags;
}
