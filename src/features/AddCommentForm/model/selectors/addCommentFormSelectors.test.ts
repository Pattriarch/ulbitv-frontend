import { type StateSchema } from 'app/providers/StoreProvider';
import { type DeepPartial } from '@reduxjs/toolkit';
import {
    getAddCommentFormError,
    getAddCommentFormText
} from '../../model/selectors/addCommentFormSelectors';

describe('articleDetails', () => {
    test('should return text', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                text: 'text'
            }
        };
        expect(getAddCommentFormText(state as StateSchema)).toEqual('text');
    });

    test('should work with empty form text', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getAddCommentFormText(state as StateSchema)).toEqual('');
    });

    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                error: 'error'
            }
        };
        expect(getAddCommentFormError(state as StateSchema)).toEqual('error');
    });

    test('should work without error', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getAddCommentFormError(state as StateSchema)).toEqual(undefined);
    });
});
