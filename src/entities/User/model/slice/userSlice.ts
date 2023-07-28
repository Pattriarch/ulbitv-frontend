import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { initAuthData } from '../services/initAuthData';
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
			localStorage.setItem(
				USER_LOCALSTORAGE_KEY,
				JSON.stringify(action.payload.id),
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
		builder.addCase(
			initAuthData.rejected,
			(state) => {
				state._inited = true;
			},
		);
	},
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
