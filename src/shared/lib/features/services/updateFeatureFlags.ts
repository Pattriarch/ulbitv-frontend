import { createAsyncThunk } from '@reduxjs/toolkit';

import { updateFeatureFlagsMutation } from '../api/featureFlagsApi';
import { getAllFeatureFlags, setFeatureFlags } from '../lib/setGetFeatures';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { FeatureFlags } from '@/shared/types/featureFlags';

interface UpdateFeatureFlagOptions {
	userId: string;
	newFeatures: Partial<FeatureFlags>;
}

export const updateFeatureFlags = createAsyncThunk<
	void,
	UpdateFeatureFlagOptions,
	ThunkConfig<string>
>('user/updateFeatureFlag', async ({ userId, newFeatures }, thunkAPI) => {
	const { rejectWithValue, dispatch } = thunkAPI;

	const allFeatures = {
		...getAllFeatureFlags(),
		...newFeatures,
	};

	try {
		await dispatch(
			updateFeatureFlagsMutation({
				userId,
				features: allFeatures,
			}),
		);

		setFeatureFlags(allFeatures);

		return undefined;
	} catch (e) {
		console.log(e);
		return rejectWithValue('');
	}
});
