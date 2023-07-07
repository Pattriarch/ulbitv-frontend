import { type FC, lazy } from 'react';
import { type ArticlesPageProps } from 'pages/ArticlesPage/ui/ArticlesPage/ArticlesPage';

export const ArticlesPageAsync = lazy<FC<ArticlesPageProps>>(async () => await new Promise(resolve => {
    setTimeout(() => {
        resolve(import('./ArticlesPage'));
    }, 400);
}));
