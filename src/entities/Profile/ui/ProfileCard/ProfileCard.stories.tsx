import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCard } from './ProfileCard';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Normal: Story = {
    args: {
        data: {
            username: 'admin',
            age: 21,
            country: Country.Russia,
            lastName: 'Pereverzev',
            firstName: 'Daniil',
            currency: Currency.USD
        }
    }
};

export const WithError: Story = {
    args: {
        error: 'true'
    }
};
