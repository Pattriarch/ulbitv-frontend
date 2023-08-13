import { createAsyncThunk } from '@reduxjs/toolkit';

import { type Article } from '../../types/article';

import { type ThunkConfig } from '@/app/providers/StoreProvider';

/**
 * Асинхронный запрос для получения статьи по ID.
 *
 * @function
 * @param {string | undefined} articleId - ID статьи для загрузки.
 * @returns {Promise<Article>} - Промис, возвращающий данные статьи.
 * @throws Ошибка, если ID статьи не предоставлен или ответ сервера пустой.
 */
export const fetchArticleById = createAsyncThunk<
	Article,
	string | undefined,
	ThunkConfig<string>
>('article/fetchArticleById', async (articleId, thunkAPI) => {
	const { extra, rejectWithValue } = thunkAPI;

	try {
		if (!articleId) {
			throw new Error('id не был передан в параметрах запроса');
		}

		const response = await extra.api.get<Article>(
			`/articles/${articleId}`,
			{
				params: {
					_expand: 'user',
				},
			},
		);

		if (!response.data) {
			throw new Error();
		}

		return response.data;
	} catch (e) {
		console.error(e);
		return rejectWithValue('error');
	}
});
