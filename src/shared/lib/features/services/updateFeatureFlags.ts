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
>('features/updateFeatureFlag', async ({ userId, newFeatures }, thunkAPI) => {
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
		// оставил reload, ибо появляются баги с иконками с ForceUpdateReload
		window.location.reload();
		return undefined;
	} catch (e) {
		console.log(e);
		return rejectWithValue('');
	}
});
