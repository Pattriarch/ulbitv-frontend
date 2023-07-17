import { screen } from '@testing-library/react';
import { EditableProfileCard } from './EditableProfileCard';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { type Profile } from '@/entities/Profile';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { profileReducer } from '../../model/slice/profileSlice';
import userEvent from '@testing-library/user-event';
import { $api } from '@/shared/api/api';

const profile: Profile = {
    id: '1',
    firstName: 'name',
    lastName: 'surname',
    age: 21,
    currency: Currency.USD,
    country: Country.Russia,
    city: 'Moscow',
    username: 'admin'
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile
        },
        user: {
            authData: { id: '1', username: 'admin' }
        }
    },
    asyncReducers: {
        profile: profileReducer
    }
};

describe('EditableProfileCard', () => {
    test('Readonly should switch', async () => {
        componentRender(<EditableProfileCard id={'1'}/>, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
    });

    test('On cancel data should turn back', async () => {
        componentRender(<EditableProfileCard id={'1'}/>, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.firstName'));
        await userEvent.clear(screen.getByTestId('ProfileCard.lastName'));

        await userEvent.type(screen.getByTestId('ProfileCard.firstName'), 'user');
        await userEvent.type(screen.getByTestId('ProfileCard.lastName'), 'user');

        expect(screen.getByTestId('ProfileCard.firstName')).toHaveValue('user');
        expect(screen.getByTestId('ProfileCard.firstName')).toHaveValue('user');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));

        expect(screen.getByTestId('ProfileCard.firstName')).toHaveValue('name');
        expect(screen.getByTestId('ProfileCard.lastName')).toHaveValue('surname');
    });

    test('Should show error', async () => {
        componentRender(<EditableProfileCard id={'1'}/>, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.firstName'));

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
    });

    test('Should send PUT request', async () => {
        const mockPutRequest = jest.spyOn($api, 'put');

        componentRender(<EditableProfileCard id={'1'}/>, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.firstName'));

        await userEvent.type(screen.getByTestId('ProfileCard.firstName'), 'user');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

        expect(mockPutRequest).toHaveBeenCalled();
    });
});
