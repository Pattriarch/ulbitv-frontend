import { createAsyncThunk } from '@reduxjs/toolkit';

import { setJsonSettingsMutation } from '../../../api/userApi';
import { getUserAuthData } from '../../selectors/getUserAuthData/getUserAuthData';
import { getJsonSettings } from '../../selectors/getUserJsonSettings/getUserJsonSettings';
import { JsonSettings } from '../../types/jsonSettings';

import { type ThunkConfig } from '@/app/providers/StoreProvider';

export const saveJsonSettings = createAsyncThunk<
	JsonSettings,
	JsonSettings,
	ThunkConfig<string>
>('user/saveJsonSettings', async (newJsonSettings, thunkAPI) => {
	const { rejectWithValue, getState, dispatch } = thunkAPI;
	const userData = getUserAuthData(getState());
	const currentSettings = getJsonSettings(getState());

	if (!userData) {
		return rejectWithValue('userData is empty');
	}

	try {
		const response = await dispatch(
			setJsonSettingsMutation({
				userId: userData.id,
				jsonSettings: {
					...currentSettings,
					...newJsonSettings,
				},
			}),
		).unwrap();

		if (!response.jsonSettings) {
			return rejectWithValue('empty response');
		}

		return response.jsonSettings;
	} catch (e) {
		console.error(e);
		return rejectWithValue('got error while mutating');
	}
});
