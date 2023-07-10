import { type StateSchema } from '@/app/providers/StoreProvider';

export const getAddArticleData = (state: StateSchema) => state.addArticleForm?.data;
export const getAddArticleError = (state: StateSchema) => state.addArticleForm?.error || '';
export const getAddArticleIsLoading = (state: StateSchema) => state.addArticleForm?.isLoading || false;
