// eslint-disable-next-line ulbitv-fsd/layer-imports-validator
import { Country } from '@/entities/Country';
// eslint-disable-next-line ulbitv-fsd/layer-imports-validator
import { Currency } from '@/entities/Currency';
// eslint-disable-next-line ulbitv-fsd/layer-imports-validator
import { Profile } from '@/entities/Profile';
import { getStorybookImage } from '@/shared/lib/tests/getStorybookImage/getStorybookImage';

export const profileStub: Profile = {
	id: '10',
	avatar: getStorybookImage(),
	username: 'admin',
	age: 21,
	country: Country.Russia,
	city: 'Moscow',
	lastName: 'Pereverzev',
	firstName: 'Daniil',
	currency: Currency.USD,
};
