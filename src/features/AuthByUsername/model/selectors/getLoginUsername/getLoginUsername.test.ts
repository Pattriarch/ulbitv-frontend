import { getLoginUsername } from './getLoginUsername';

import { type StateSchema } from '@/app/providers/StoreProvider';

describe('getLoginUsername', () => {
	test('should return error', () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				username: 'test',
			},
		};
		expect(getLoginUsername(state as StateSchema)).toEqual('test');
	});

	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getLoginUsername(state as StateSchema)).toEqual('');
	});
});
