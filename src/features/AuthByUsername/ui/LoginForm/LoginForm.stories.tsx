import type { Meta, StoryObj } from '@storybook/react';

import LoginForm from './LoginForm';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

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
};

export const NormalRedesigned: Story = {
	decorators: [
		NewDesignDecorator,
		StoreDecorator({
			loginForm: {
				username: 'test username',
				password: 'test password',
			},
		}),
	],
};

export const Loading: Story = {
	decorators: [
		StoreDecorator({
			loginForm: {
				isLoading: true,
			},
		}),
	],
};

export const LoadingRedesigned: Story = {
	decorators: [
		NewDesignDecorator,
		StoreDecorator({
			loginForm: {
				isLoading: true,
			},
		}),
	],
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
};

export const ErrorRedesigned: Story = {
	decorators: [
		NewDesignDecorator,
		StoreDecorator({
			loginForm: {
				username: 'test username',
				password: 'test password',
				error: 'ERROR',
			},
		}),
	],
};
