import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { saveJsonSettings } from '../services/saveJsonSettings';
import { JsonSettings } from '../types/jsonSettings';
import { type User, type UserSchema } from '../types/user';

import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import { setFeatureFlags } from '@/shared/lib/features';

const initialState: UserSchema = {
	_inited: false,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setAuthData: (state, action: PayloadAction<User>) => {
			state.authData = action.payload;
			setFeatureFlags(action.payload.features);
		},
		initAuthData: (state) => {
			const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
			if (user) {
				const authData = JSON.parse(user) as User;
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
	extraReducers: (builder) => {
		builder.addCase(
			saveJsonSettings.fulfilled,
			(state, { payload }: PayloadAction<JsonSettings>) => {
				if (state.authData) {
					state.authData.jsonSettings = payload;
				}
			},
		);
	},
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
