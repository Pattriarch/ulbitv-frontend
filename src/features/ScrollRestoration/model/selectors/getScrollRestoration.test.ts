import { getScrollRestoration, getScrollRestorationByPath } from '../..';

import { type StateSchema } from '@/app/providers/StoreProvider';
import { AppRoutes } from '@/shared/const/router';

describe('getScrollRestoration', () => {
	describe('getScrollRestoration', () => {
		test('should return state', () => {
			const scroll = {
				[AppRoutes.MAIN]: 100,
			};
			const state: DeepPartial<StateSchema> = {
				scrollRestoration: {
					scroll,
				},
			};
			expect(getScrollRestoration(state as StateSchema)).toEqual(scroll);
		});

		test('should work with empty state', () => {
			const state: DeepPartial<StateSchema> = {};
			expect(getScrollRestoration(state as StateSchema)).toEqual(
				undefined,
			);
		});
	});
	describe('getScrollRestorationByPath', () => {
		test('should return scroll value', () => {
			const scroll = {
				[AppRoutes.MAIN]: 100,
			};
			const state: DeepPartial<StateSchema> = {
				scrollRestoration: {
					scroll,
				},
			};
			expect(
				getScrollRestorationByPath(
					state as StateSchema,
					AppRoutes.MAIN,
				),
			).toEqual(100);
		});

		test('should return default scroll value for non-found in scroll list key', () => {
			const scroll = {
				[AppRoutes.MAIN]: 100,
			};
			const state: DeepPartial<StateSchema> = {
				scrollRestoration: {
					scroll,
				},
			};
			expect(
				getScrollRestorationByPath(
					state as StateSchema,
					AppRoutes.PROFILE,
				),
			).toEqual(0);
		});

		test('should work with empty state', () => {
			const state: DeepPartial<StateSchema> = {};
			expect(
				getScrollRestorationByPath(
					state as StateSchema,
					'NOT_EXISTING_PATH',
				),
			).toEqual(0);
		});
	});
});
