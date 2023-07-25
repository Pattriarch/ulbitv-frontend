import { type FC, lazy } from 'react';

import { type ArticlesPageProps } from './ArticlesPage';

export const ArticlesPageAsync = lazy<FC<ArticlesPageProps>>(
	async () => await import('./ArticlesPage'),
);
