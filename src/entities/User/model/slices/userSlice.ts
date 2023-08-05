import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { initAuthData } from '../services/initAuthData/initAuthData';
import { saveJsonSettings } from '../services/saveJsonSettings/saveJsonSettings';
import { JsonSettings } from '../types/jsonSettings';
import { type User, type UserSchema } from '../types/user';

import {
	LOCAL_STORAGE_LAST_DESIGN_KEY,
	USER_LOCALSTORAGE_KEY,
} from '@/shared/const/localStorage';
import { setFeatureFlags } from '@/shared/lib/features';

const initialState: UserSchema = {
	_inited: false,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setAuthData: (state, { payload }: PayloadAction<User>) => {
			state.authData = payload;
			setFeatureFlags(payload.features);
			localStorage.setItem(USER_LOCALSTORAGE_KEY, payload.id);
			localStorage.setItem(
				LOCAL_STORAGE_LAST_DESIGN_KEY,
				payload.features?.isAppRedesigned ? 'new' : 'old',
			);
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
		builder.addCase(
			initAuthData.fulfilled,
			(state, { payload }: PayloadAction<User>) => {
				state.authData = payload;
				setFeatureFlags(payload.features);
				state._inited = true;
			},
		);
		builder.addCase(initAuthData.rejected, (state) => {
			state._inited = true;
		});
	},
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
