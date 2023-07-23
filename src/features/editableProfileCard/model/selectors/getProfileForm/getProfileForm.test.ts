import { getProfileForm } from './getProfileForm';

import { type StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

describe('getProfileForm', () => {
    test('should return profile form', () => {
        const data = {
            username: 'admin',
            age: 21,
            country: Country.Russia,
            lastName: 'Pereverzev',
            firstName: 'Daniil',
            currency: Currency.USD
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data
            }
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
