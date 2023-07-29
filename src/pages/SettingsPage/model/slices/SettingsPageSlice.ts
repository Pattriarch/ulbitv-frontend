import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type SettingsPageSchema } from '../types/SettingsPageSchema';

const initialState: SettingsPageSchema = {

};

export const SettingsPageSlice = createSlice({
    name: 'SettingsPage',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {

        }
    }
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const SettingsPageActions = SettingsPageSlice.actions;
export const SettingsPageReducer = SettingsPageSlice.reducer;
