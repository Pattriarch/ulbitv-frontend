// eslint-disable-next-line ulbitv-fsd/layer-imports-validator
import '@/app/styles/index.scss';
import type { Meta, StoryObj } from '@storybook/react';

import ProfilePage from './ProfilePage';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ProfilePage> = {
	title: 'pages/ProfilePage',
	component: ProfilePage,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Normal: Story = {
	decorators: [
		StoreDecorator({
			profile: {
				readonly: true,
				form: {
					username: 'admin',
					age: 21,
					country: Country.Russia,
					lastName: 'Pereverzev',
					firstName: 'Daniil',
					currency: Currency.USD,
				},
			},
		}),
	],
	args: {},
};
