import { Profile } from '@/entities/Profile';
import { getStorybookImage } from '@/shared/lib/tests/getStorybookImage/getStorybookImage';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

export const PROFILE_STORYBOOK_FIXTURE: Profile = {
	id: '1',
	avatar: getStorybookImage(),
	username: 'admin',
	age: 21,
	country: Country.Russia,
	city: 'Moscow',
	lastName: 'Pereverzev',
	firstName: 'Daniil',
	currency: Currency.USD,
};
