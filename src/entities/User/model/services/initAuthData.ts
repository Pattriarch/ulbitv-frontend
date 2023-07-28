import { createAsyncThunk } from '@reduxjs/toolkit';

import { User } from '../..';
import { getUserDataByIdQuery } from '../../api/userApi';

import { type ThunkConfig } from '@/app/providers/StoreProvider';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';

export const initAuthData = createAsyncThunk<
	User,
	void,
	ThunkConfig<string>
>('user/initAuthData', async (newJsonSettings, thunkAPI) => {
	const { rejectWithValue, dispatch } = thunkAPI;

	const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);

	if (!userId) {
		return rejectWithValue('');
	}

	try {
		const response = await dispatch(
			getUserDataByIdQuery(userId)
		).unwrap();

		return response;
	} catch (e) {
		console.error(e);
		return rejectWithValue('');
	}
});
