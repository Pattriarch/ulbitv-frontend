import { type FC, lazy } from 'react';

export const MainPageAsync = lazy<FC>(async () => await new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(import('./MainPage'));
    }, 250);
}));
