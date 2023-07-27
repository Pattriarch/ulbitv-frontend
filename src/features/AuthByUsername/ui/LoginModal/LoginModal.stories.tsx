import type { Meta, StoryObj } from '@storybook/react';

import { LoginModal } from './LoginModal';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof LoginModal> = {
	title: 'features/AuthByUsername/LoginModal',
	component: LoginModal,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LoginModal>;

export const Normal: Story = {
	decorators: [
		StoreDecorator({
			loginForm: {
				username: 'test username',
				password: 'test password',
			},
		}),
	],
	args: {
		isOpen: true,
	},
};

export const Loading: Story = {
	decorators: [
		StoreDecorator({
			loginForm: {
				isLoading: true,
			},
		}),
	],
	args: {
		isOpen: true,
	},
};

export const Error: Story = {
	decorators: [
		StoreDecorator({
			loginForm: {
				username: 'test username',
				password: 'test password',
				error: 'ERROR',
			},
		}),
	],
	args: {
		isOpen: true,
	},
};
