import { Profile } from '..';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

export const PROFILE_FIXTURE_ID = '1';

export const PROFILE_FIXTURE: Profile = {
	id: PROFILE_FIXTURE_ID,
	avatar: '',
	username: 'admin',
	age: 21,
	country: Country.Russia,
	city: 'Moscow',
	lastName: 'Pereverzev',
	firstName: 'Daniil',
	currency: Currency.USD,
};
