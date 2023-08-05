import { createAsyncThunk } from '@reduxjs/toolkit';

import { getUserDataByIdQuery } from '../../../api/userApi';
import { User } from '../../../index';

import { type ThunkConfig } from '@/app/providers/StoreProvider';
import {
	LOCAL_STORAGE_LAST_DESIGN_KEY,
	USER_LOCALSTORAGE_KEY,
} from '@/shared/const/localStorage';

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
	'user/initAuthData',
	async (newJsonSettings, thunkAPI) => {
		const { rejectWithValue, dispatch } = thunkAPI;

		const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);

		if (!userId) {
			return rejectWithValue('Не был передан userId');
		}

		try {
			const response = await dispatch(
				getUserDataByIdQuery(userId),
			).unwrap();

			localStorage.setItem(
				LOCAL_STORAGE_LAST_DESIGN_KEY,
				response.features?.isAppRedesigned ? 'new' : 'old',
			);

			return response;
		} catch (e) {
			console.error(e);
			return rejectWithValue('error');
		}
	},
);
