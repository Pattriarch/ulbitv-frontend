import { createAsyncThunk } from '@reduxjs/toolkit';
import { type User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { type ThunkConfig } from 'app/providers/StoreProvider';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        const {
            extra,
            dispatch,
            rejectWithValue
        } = thunkAPI;

        try {
            const response = await extra.api.post('/login', authData);
            // const response = await axios.post<User>('http://localhost:8000/login', authData);

            if (!response.data) {
                // если ничего не вернул - кидаем ошибку
                throw new Error();
            }

            // сохраняем токен
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            // обновляем стейт
            dispatch(userActions.setAuthData(response.data));

            extra?.navigate?.('/about');

            return response.data;
        } catch (e) {
            console.error(e);
            return rejectWithValue('error');
        }
    }
);
