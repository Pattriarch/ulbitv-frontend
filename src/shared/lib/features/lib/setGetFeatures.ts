import { LOCAL_STORAGE_LAST_DESIGN_KEY } from '@/shared/const/localStorage';
import { FeatureFlags } from '@/shared/types/featureFlags';

const designValue = localStorage.getItem(LOCAL_STORAGE_LAST_DESIGN_KEY);

const defaultFeatures: FeatureFlags = {
	// по дефолту хотим получать новый дизайн
	isAppRedesigned: designValue === null || designValue === 'new',
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
