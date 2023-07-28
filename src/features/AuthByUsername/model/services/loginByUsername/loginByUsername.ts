import { createAsyncThunk } from '@reduxjs/toolkit';

import { type ThunkConfig } from '@/app/providers/StoreProvider';
import { type User, userActions } from '@/entities/User';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';

interface LoginByUsernameProps {
	username: string;
	password: string;
}

export const loginByUsername = createAsyncThunk<
	User,
	LoginByUsernameProps,
	ThunkConfig<string>
>('common/loginByUsername', async (authData, thunkAPI) => {
	const { extra, dispatch, rejectWithValue } = thunkAPI;

	try {
		const response = await extra.api.post('/login', authData);

		if (!response.data) {
			// если ничего не вернул - кидаем ошибку
			throw new Error();
		}

		// обновляем стейт
		dispatch(userActions.setAuthData(response.data));

		// todo: поправить переход
		// extra?.navigate?.('/profile');

		return response.data;
	} catch (e) {
		console.error(e);
		return rejectWithValue('error');
	}
});
