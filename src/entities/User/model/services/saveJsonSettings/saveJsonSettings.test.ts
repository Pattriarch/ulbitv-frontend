import { saveJsonSettings } from '../../..';
import { setJsonSettingsMutation } from '../../../api/userApi';
import { USER_FIXTURE } from '../../../tests/userFixture';

import { Theme } from '@/shared/const/theme';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

jest.mock('@/entities/User/api/userApi');

describe('saveJsonSettings', () => {
	test('success', async () => {
		const NEW_JSON_SETTINGS = {
			jsonSettings: {
				theme: Theme.DARK,
				isFirstVisit: false,
				isArticlesPageWasOpened: false,
			},
		};

		const thunk = new TestAsyncThunk(saveJsonSettings, {
			user: {
				authData: USER_FIXTURE,
			},
		});

		thunk.dispatch.mockReturnValue({
			unwrap: () => Promise.resolve(NEW_JSON_SETTINGS),
		});

		const result = await thunk.callThunk(NEW_JSON_SETTINGS.jsonSettings);

		expect(setJsonSettingsMutation).toHaveBeenCalledWith({
			userId: USER_FIXTURE.id,
			jsonSettings: {
				...USER_FIXTURE.jsonSettings,
				...NEW_JSON_SETTINGS.jsonSettings,
			},
		});
		expect(thunk.dispatch).toHaveBeenCalledTimes(3);
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(result.payload).toBe(NEW_JSON_SETTINGS.jsonSettings);
	});

	test('userData is empty', async () => {
		const thunk = new TestAsyncThunk(saveJsonSettings, {
			user: {},
		});

		const result = await thunk.callThunk({});

		console.log(result);

		expect(thunk.dispatch).toHaveBeenCalledTimes(2);
		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toBe('userData is empty');
	});

	test('empty response', async () => {
		const NEW_JSON_SETTINGS = {
			jsonSettings: {
				theme: Theme.DARK,
				isFirstVisit: false,
				isArticlesPageWasOpened: false,
			},
		};

		const thunk = new TestAsyncThunk(saveJsonSettings, {
			user: {
				authData: USER_FIXTURE,
			},
		});

		thunk.dispatch.mockReturnValue({
			unwrap: () => Promise.resolve({}),
		});

		const result = await thunk.callThunk(NEW_JSON_SETTINGS.jsonSettings);

		expect(setJsonSettingsMutation).toHaveBeenCalledWith({
			userId: USER_FIXTURE.id,
			jsonSettings: {
				...USER_FIXTURE.jsonSettings,
				...NEW_JSON_SETTINGS.jsonSettings,
			},
		});
		expect(thunk.dispatch).toHaveBeenCalledTimes(3);
		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toBe('empty response');
	});

	test('mutation error', async () => {
		const thunk = new TestAsyncThunk(saveJsonSettings, {
			user: {
				authData: USER_FIXTURE,
			},
		});

		thunk.dispatch.mockReturnValue({
			unwrap: () => {},
		});

		const result = await thunk.callThunk({});

		expect(thunk.dispatch).toHaveBeenCalledTimes(3);
		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toBe('got error while mutating');
	});
});
