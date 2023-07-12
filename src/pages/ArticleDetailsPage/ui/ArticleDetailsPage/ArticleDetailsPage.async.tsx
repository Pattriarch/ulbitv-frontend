import { type FC, lazy } from 'react';
import { type ArticleDetailsPageProps } from './ArticleDetailsPage';

export const ArticleDetailsPageAsync = lazy<FC<ArticleDetailsPageProps>>(async () => await import('./ArticleDetailsPage'));
