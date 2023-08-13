import { createSelector } from '@reduxjs/toolkit';

import { type StateSchema } from '@/app/providers/StoreProvider';
import { getUserAuthData } from '@/entities/User';

// Получение данных деталей статьи
export const getArticleDetailsData = (state: StateSchema) =>
	state.articleDetails?.data;

// Проверить, загружаются ли в данный момент детали статьи
export const getArticleDetailsIsLoading = (state: StateSchema) =>
	state.articleDetails?.isLoading || false;

// Получить ошибку при загрузке деталей статьи, если она есть
export const getArticleDetailsError = (state: StateSchema) =>
	state.articleDetails?.error;

// Проверить, может ли текущий пользователь редактировать статью
export const getCanCurrentUserEditArticle = createSelector(
	getUserAuthData,
	getArticleDetailsData,
	(authData, articleData) => {
		if (!authData?.id || !articleData?.user?.id) {
			return false;
		}
		return authData?.id === articleData?.user?.id;
	},
);
