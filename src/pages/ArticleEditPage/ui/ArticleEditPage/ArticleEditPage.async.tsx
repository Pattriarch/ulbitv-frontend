import { type FC, lazy } from 'react';
import { type ArticleEditPageProps } from 'pages/ArticleEditPage/ui/ArticleEditPage/ArticleEditPage';

export const ArticleEditPageAsync = lazy<FC<ArticleEditPageProps>>(async () => await import('./ArticleEditPage'));
