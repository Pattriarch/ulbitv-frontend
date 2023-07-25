import { createAsyncThunk } from '@reduxjs/toolkit';

import { ValidateProfileError } from '../../consts/consts';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { validateProfileData } from '../../services/validateProfileData/validateProfileData';

import { type ThunkConfig } from '@/app/providers/StoreProvider';
import { type Profile } from '@/entities/Profile';

export const updateProfileData = createAsyncThunk<
	Profile,
	void,
	ThunkConfig<ValidateProfileError[]>
>('profile/updateProfileData', async (_, thunkAPI) => {
	const { extra, rejectWithValue, getState } = thunkAPI;

	const formData = getProfileForm(getState());

	if (!formData?.id) {
		throw new Error();
	}

	const errors = validateProfileData(formData);

	if (errors.length) {
		return rejectWithValue(errors);
	}

	try {
		const response = await extra.api.put<Profile>(
			// todo: fix any
			// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
			`/profile/${formData?.id}`,
			formData,
		);

		if (!response.data) {
			throw new Error();
		}

		return response.data;
	} catch (e) {
		console.error(e);
		return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
	}
});
