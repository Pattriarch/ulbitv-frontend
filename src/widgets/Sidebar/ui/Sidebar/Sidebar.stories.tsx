// eslint-disable-next-line ulbitv-fsd/layer-imports-validator
import '@/app/styles/index.scss';
import type { Meta, StoryObj } from '@storybook/react';

import { Sidebar } from './Sidebar';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof Sidebar> = {
	title: 'widgets/Sidebar',
	component: Sidebar,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Normal: Story = {
	decorators: [
		StoreDecorator({
			user: { authData: {} },
		}),
	],
	args: {},
};

export const NoAuth: Story = {
	decorators: [
		StoreDecorator({
			user: {},
		}),
	],
	args: {},
};
