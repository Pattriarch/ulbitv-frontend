import { type DeepPartial } from '@reduxjs/toolkit';

import {
	getJsonSettings,
	useJsonSettings,
} from './getUserJsonSettings';

import { type StateSchema } from '@/app/providers/StoreProvider';
import { Theme } from '@/shared/const/theme';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';

describe('entities/User/selectors/getUserJsonSettings', () => {
	let result: any;
	const TestComponent = () => {
		result = useJsonSettings();
		return null;
	};

	beforeEach(() => {
		result = null;
	});

	describe('getJsonSettings', () => {
		test('should return json settings', () => {
			const state: DeepPartial<StateSchema> = {
				user: {
					authData: {
						id: '1',
						username: 'test',
						jsonSettings: {
							theme: Theme.TAN,
						},
					},
				},
			};
			expect(getJsonSettings(state as StateSchema).theme).toEqual(Theme.TAN);
		});

		test('should work with empty state (returns default json settings)', () => {
			const state: DeepPartial<StateSchema> = {};
			expect(getJsonSettings(state as StateSchema).theme).toEqual(Theme.DARK);
		});
	});

	describe('useJsonSettings', () => {
		it('should return correct theme', () => {
			const initialState = {
				user: {
					authData: {
						jsonSettings: {
							theme: Theme.TAN,
							isFirstVisit: true,
							isArticlesPageWasOpened: false,
						},
					},
				},
			};

			componentRender(<TestComponent />, { initialState });
			expect(result.theme).toEqual(Theme.TAN);
		});
	});
});
