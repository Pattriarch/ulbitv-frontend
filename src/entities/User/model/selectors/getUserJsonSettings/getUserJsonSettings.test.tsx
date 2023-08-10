import { type DeepPartial } from '@reduxjs/toolkit';

import { USER_DEFAULT_THEME } from '../../../consts/userConsts';
import { USER_FIXTURE, USER_FIXTURE_THEME } from '../../../tests/userFixture';

import { getJsonSettings, useJsonSettings } from './getUserJsonSettings';

import { type StateSchema } from '@/app/providers/StoreProvider';
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
					authData: USER_FIXTURE,
				},
			};
			expect(getJsonSettings(state as StateSchema).theme).toEqual(
				USER_FIXTURE_THEME,
			);
		});

		test('should work with empty state (returns default json settings)', () => {
			const state: DeepPartial<StateSchema> = {};
			expect(getJsonSettings(state as StateSchema).theme).toEqual(
				USER_DEFAULT_THEME,
			);
		});
	});

	describe('useJsonSettings', () => {
		it('should return correct theme', () => {
			const initialState = {
				user: {
					authData: USER_FIXTURE,
				},
			};

			componentRender(<TestComponent />, { initialState });
			expect(result.theme).toEqual(USER_FIXTURE_THEME);
		});
	});
});
