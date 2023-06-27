import { lazy } from 'react';

export const MainPageAsync = lazy(async () => await new Promise((resolve, reject) => {
    setTimeout(() => {
        // @ts-expect-error
        resolve(import('./MainPage'));
    }, 250);
}));
