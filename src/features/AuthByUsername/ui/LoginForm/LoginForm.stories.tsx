import type { Meta, StoryObj } from '@storybook/react';

import LoginForm from './LoginForm';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof LoginForm> = {
	title: 'features/AuthByUsername/LoginForm',
	component: LoginForm,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Normal: Story = {
	decorators: [
		StoreDecorator({
			loginForm: {
				username: 'test username',
				password: 'test password',
			},
		}),
	],
	args: {},
};

export const Loading: Story = {
	decorators: [
		StoreDecorator({
			loginForm: {
				isLoading: true,
			},
		}),
	],
	args: {},
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
	args: {},
};
