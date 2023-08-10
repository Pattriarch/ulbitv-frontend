import { createSelector } from '@reduxjs/toolkit';

import { type StateSchema } from '@/app/providers/StoreProvider';
import { getUserAuthData } from '@/entities/User';

export const getArticleDetailsData = (state: StateSchema) =>
	state.articleDetails?.data;
export const getArticleDetailsIsLoading = (state: StateSchema) =>
	state.articleDetails?.isLoading || false;
export const getArticleDetailsError = (state: StateSchema) =>
	state.articleDetails?.error;

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
