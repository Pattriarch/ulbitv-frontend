import { type DeepPartial } from '@reduxjs/toolkit';

import { type AddCommentFormSchema } from '../types/addCommentForm';

import {
	addCommentFormActions,
	addCommentFormReducer,
} from './addCommentFormSlice';

describe('addCommentFormSlice', () => {
	test('test set text', () => {
		const state: DeepPartial<AddCommentFormSchema> = {
			text: 'text',
		};
		expect(
			addCommentFormReducer(
				state as AddCommentFormSchema,
				addCommentFormActions.setText('new text'),
			),
		).toEqual({ text: 'new text' });
	});

	test('test set empty text', () => {
		const state: DeepPartial<AddCommentFormSchema> = {
			text: 'text',
		};
		expect(
			addCommentFormReducer(
				state as AddCommentFormSchema,
				addCommentFormActions.setText(''),
			),
		).toEqual({ text: '' });
	});
});
