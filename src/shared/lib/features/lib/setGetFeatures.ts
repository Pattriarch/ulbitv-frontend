import { FeatureFlags } from '@/shared/types/featureFlags';

// фичи не меняются в ходе сессии, их делать реактивными необязательно
let featureFlags: FeatureFlags = {};

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
