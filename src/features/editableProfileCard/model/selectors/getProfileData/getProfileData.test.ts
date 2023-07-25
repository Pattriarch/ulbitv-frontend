import { getProfileData } from './getProfileData';

import { type StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

describe('getProfileData', () => {
	test('should return profile data', () => {
		const data = {
			username: 'admin',
			age: 21,
			country: Country.Russia,
			lastName: 'Pereverzev',
			firstName: 'Daniil',
			currency: Currency.USD,
		};
		const state: DeepPartial<StateSchema> = {
			profile: {
				data,
			},
		};
		expect(getProfileData(state as StateSchema)).toEqual(data);
	});

	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getProfileData(state as StateSchema)).toEqual(undefined);
	});
});
