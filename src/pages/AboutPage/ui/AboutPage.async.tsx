import { type FC, lazy } from 'react';

export const AboutPageAsync = lazy<FC>(async () => await new Promise(resolve => {
    setTimeout(() => {
        resolve(import('./AboutPage'));
    }, 1500);
}));
