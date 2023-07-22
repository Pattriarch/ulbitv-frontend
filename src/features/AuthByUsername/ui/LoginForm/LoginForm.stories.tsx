import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import LoginForm from './LoginForm';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Normal: Story = {
    decorators: [StoreDecorator({
        loginForm: {
            username: 'test username',
            password: 'test password'
        }
    })],
    args: {}
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
        loginForm: {
            username: 'test username',
            password: 'test password'
        }
    })],
    args: {}
};

export const WithError: Story = {
    decorators: [StoreDecorator({
        loginForm: {
            username: 'test username',
            password: 'test password',
            error: 'ERROR'
        }
    })],
    args: {}
};

export const Loading: Story = {
    decorators: [StoreDecorator({
        loginForm: {
            isLoading: true
        }
    })],
    args: {}
};
