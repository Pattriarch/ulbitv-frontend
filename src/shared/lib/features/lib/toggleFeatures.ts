import { getFeatureFlag } from './setGetFeatures';

import { FeatureFlags } from '@/shared/types/featureFlags';

interface ToggleFeaturesOptions<T> {
	name: keyof FeatureFlags;
	on: () => T;
	off: () => T;
}

export function toggleFeatures<T>({
	off,
	on,
	name,
}: ToggleFeaturesOptions<T>): T {
	console.log(getFeatureFlag(name));
	return getFeatureFlag(name) ? on() : off();
}
