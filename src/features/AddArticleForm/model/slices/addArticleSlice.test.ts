import { type DeepPartial } from '@reduxjs/toolkit';

import { addArticleFormReducer, AddArticleSchema } from '../..';

import { addArticleFormActions } from './addArticleSlice';

import { ARTICLE_FIXTURE } from '@/entities/Article/testing';

describe('addArticleSlice', () => {
	test('update state data', () => {
		const state: DeepPartial<AddArticleSchema> = {
			data: ARTICLE_FIXTURE,
		};
		expect(
			addArticleFormReducer(
				state as AddArticleSchema,
				addArticleFormActions.updateAddArticleData({
					title: 'NEW_TITLE',
				}),
			),
		).toEqual({ data: { ...ARTICLE_FIXTURE, title: 'NEW_TITLE' } });
	});
});
