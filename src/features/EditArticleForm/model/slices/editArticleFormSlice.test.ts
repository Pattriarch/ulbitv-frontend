import { type DeepPartial } from '@reduxjs/toolkit';

import { editArticleFormReducer, EditArticleFormSchema } from '../..';

import { editArticleFormActions } from './editArticleFormSlice';

import { ARTICLE_FIXTURE } from '@/entities/Article/testing';

describe('editArticleFormSlice', () => {
	test('update state form', () => {
		const state: DeepPartial<EditArticleFormSchema> = {
			form: ARTICLE_FIXTURE,
		};
		expect(
			editArticleFormReducer(
				state as EditArticleFormSchema,
				editArticleFormActions.updateArticle({
					title: 'NEW_TITLE',
				}),
			),
		).toEqual({ form: { ...ARTICLE_FIXTURE, title: 'NEW_TITLE' } });
	});
	test('cancel edit', () => {
		const state: DeepPartial<EditArticleFormSchema> = {
			data: ARTICLE_FIXTURE,
			form: { ...ARTICLE_FIXTURE, title: 'NEW_TITLE' },
		};
		expect(
			editArticleFormReducer(
				state as EditArticleFormSchema,
				editArticleFormActions.cancelEdit(),
			),
		).toEqual({ data: ARTICLE_FIXTURE, form: ARTICLE_FIXTURE });
	});
});
