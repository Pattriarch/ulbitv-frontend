import { type DeepPartial } from '@reduxjs/toolkit';

import {
	scrollRestorationActions,
	scrollRestorationReducer,
	ScrollRestorationSchema,
} from '../..';

import { AppRoutes } from '@/shared/const/router';

describe('scrollRestorationSlice', () => {
	test('add new state route', () => {
		const state: DeepPartial<ScrollRestorationSchema> = {
			scroll: {
				[AppRoutes.MAIN]: 300,
			},
		};
		expect(
			scrollRestorationReducer(
				state as ScrollRestorationSchema,
				scrollRestorationActions.setScrollPosition({
					path: AppRoutes.ABOUT,
					position: 400,
				}),
			),
		).toEqual({
			scroll: {
				[AppRoutes.MAIN]: 300,
				[AppRoutes.ABOUT]: 400,
			},
		});
	});
	test('update state route', () => {
		const state: DeepPartial<ScrollRestorationSchema> = {
			scroll: {
				[AppRoutes.MAIN]: 300,
			},
		};
		expect(
			scrollRestorationReducer(
				state as ScrollRestorationSchema,
				scrollRestorationActions.setScrollPosition({
					path: AppRoutes.MAIN,
					position: 400,
				}),
			),
		).toEqual({
			scroll: {
				[AppRoutes.MAIN]: 400,
			},
		});
	});
});
