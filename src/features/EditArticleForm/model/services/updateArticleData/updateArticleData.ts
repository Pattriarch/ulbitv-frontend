import { createAsyncThunk } from '@reduxjs/toolkit';

import { getEditArticleForm } from '../../../model/selectors/editArticleFormSelectors';

import { type ThunkConfig } from '@/app/providers/StoreProvider';
import { type Article } from '@/entities/Article';

export const updateArticleData = createAsyncThunk<
	Article,
	void,
	ThunkConfig<string>
>(
    'editArticleForm/updateArticleData',
    async (_, thunkAPI) => {
        const {
            extra,
            rejectWithValue,
            getState
        } = thunkAPI;

        const formData = getEditArticleForm(getState());

        if (!formData?.id) {
            throw new Error();
        }

        // const errors = validateProfileData(formData);
        //
        // if (errors.length) {
        //     return rejectWithValue(errors);
        // }

        try {
            const response = await extra.api.put<Article>(
                // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                `/articles/${formData?.id}`,
                formData
            );

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            console.error(e);
            return rejectWithValue('error');
            // return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
    }
);
