import { DeepPartial } from '@reduxjs/toolkit';

import { getCanEditArticle } from './article';

import { StateSchema } from '@/app/providers/StoreProvider';

describe('article', () => {
	test('should return true', () => {
		const article = {
			id: '1',
			img: '',
			createdAt: '',
			views: 123,
			user: { id: '1', username: 'asd' },
			blocks: [],
			type: [],
			title: 'test',
			subtitle: 'subtest',
		};
		const state: DeepPartial<StateSchema> = {
			articleDetails: {
				data: article,
			},
			user: {
				authData: {
					id: '1',
					username: 'asd',
				},
			},
		};

		expect(
			getCanEditArticle(state as StateSchema),
		).toEqual(true);
	});

	test('should return false with different user id and author user id', () => {
		const article = {
			id: '2',
			img: '',
			createdAt: '',
			views: 123,
			user: { id: '2', username: 'asd' },
			blocks: [],
			type: [],
			title: 'test',
			subtitle: 'subtest',
		};
		const state: DeepPartial<StateSchema> = {
			articleDetails: {
				data: article,
			},
			user: {
				authData: {
					id: '1',
					username: 'asd',
				},
			},
		};

		expect(
			getCanEditArticle(state as StateSchema),
		).toEqual(false);
	});

	test('should return false without user auth data', () => {
		const article = {
			id: '2',
			img: '',
			createdAt: '',
			views: 123,
			user: { id: '1', username: 'asd' },
			blocks: [],
			type: [],
			title: 'test',
			subtitle: 'subtest',
		};
		const state: DeepPartial<StateSchema> = {
			articleDetails: {
				data: article,
			},
			user: {}
		};

		expect(
			getCanEditArticle(state as StateSchema),
		).toEqual(false);
	});

	test('should return false without article state', () => {
		const state: DeepPartial<StateSchema> = {
			user: {
				authData: {
					id: '1',
					username: 'asd',
				},
			},
		};

		expect(
			getCanEditArticle(state as StateSchema),
		).toEqual(false);
	});
});
