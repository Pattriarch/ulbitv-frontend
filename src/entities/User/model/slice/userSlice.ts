import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { type AuthData, type UserSchema } from '../types/authData';

import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import { setFeatureFlags } from '@/shared/lib/features';

const initialState: UserSchema = {
	_inited: false,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setAuthData: (state, action: PayloadAction<AuthData>) => {
			state.authData = action.payload;
			setFeatureFlags(action.payload.features);
		},
		initAuthData: (state) => {
			const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
			if (user) {
				const authData = JSON.parse(user) as AuthData;
				state.authData = authData;
				setFeatureFlags(authData.features);
			}
			state._inited = true;
		},
		logout: (state) => {
			state.authData = undefined;
			localStorage.removeItem(USER_LOCALSTORAGE_KEY);
		},
	},
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
