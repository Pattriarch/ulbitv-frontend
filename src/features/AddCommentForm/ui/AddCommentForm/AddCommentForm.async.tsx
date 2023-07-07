import { type FC, lazy } from 'react';
import { type AddCommentFormProps } from './AddCommentForm';

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(async () => await new Promise(resolve => {
    setTimeout(() => {
        resolve(import('./AddCommentForm'));
    }, 1500);
}));
