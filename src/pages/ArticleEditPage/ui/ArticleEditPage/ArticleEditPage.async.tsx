import { type FC, lazy } from 'react';
import { type ArticleEditPageProps } from './ArticleEditPage';

export const ArticleEditPageAsync = lazy<FC<ArticleEditPageProps>>(async () => await import('./ArticleEditPage'));
