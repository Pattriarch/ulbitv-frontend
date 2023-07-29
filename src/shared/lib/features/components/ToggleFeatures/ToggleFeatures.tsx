import { ReactElement } from 'react';

import { getFeatureFlag } from '../../lib/setGetFeatures';

import { FeatureFlags } from '@/shared/types/featureFlags';

interface ToggleFeaturesProps {
	name: keyof FeatureFlags;
	on: ReactElement;
	off: ReactElement;
}

export const ToggleFeatures = (props: ToggleFeaturesProps) => {
	const { name, on, off } = props;

	if (getFeatureFlag(name)) {
		return on;
	}

	return off;
};
