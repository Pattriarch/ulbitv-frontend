import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { type User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

interface LoginByUsernameProps {
	username: string;
	password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string, }>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', authData);

            if (!response.data) {
                // если ничего не вернул - кидаем ошибку
                throw new Error();
            }

            // сохраняем токен
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            // обновляем стейт
            thunkAPI.dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (e) {
            console.error(e);
            return thunkAPI.rejectWithValue('error');
        }
    }
);
