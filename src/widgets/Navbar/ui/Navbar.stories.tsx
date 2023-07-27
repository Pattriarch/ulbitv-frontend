// eslint-disable-next-line ulbitv-fsd/layer-imports-validator
import '@/app/styles/index.scss';
import type { Meta, StoryObj } from '@storybook/react';

import { Navbar } from '../index';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof Navbar> = {
	title: 'widgets/Navbar',
	component: Navbar,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Normal: Story = {
	decorators: [StoreDecorator({})],
	args: {},
};

export const AuthNavbar: Story = {
	decorators: [
		StoreDecorator({
			user: {
				authData: {
					id: '1',
					username: 'Daniil',
				},
			},
		}),
	],
	args: {},
};
