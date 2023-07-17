import type { Meta, StoryObj } from '@storybook/react';
import '@/app/styles/index.scss';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import ProfilePage from './ProfilePage';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Normal: Story = {
    decorators: [StoreDecorator({
        profile: {
            form: {
                username: 'admin',
                age: 21,
                country: Country.Russia,
                lastName: 'Pereverzev',
                firstName: 'Daniil',
                currency: Currency.USD
            }
        }
    })],
    args: {}
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
        profile: {
            form: {
                username: 'admin',
                age: 21,
                country: Country.Russia,
                lastName: 'Pereverzev',
                firstName: 'Daniil',
                currency: Currency.USD
            }
        }
    })],
    args: {}
};
