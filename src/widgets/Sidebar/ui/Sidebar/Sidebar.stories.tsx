import type { Meta, StoryObj } from '@storybook/react';
import '@/app/styles/index.scss';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Sidebar } from './Sidebar';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof Sidebar> = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {
    decorators: [StoreDecorator({
        user: { authData: {} }
    })],
    args: {}
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
        user: { authData: {} }
    })],
    args: {}
};

export const NoAuth: Story = {
    decorators: [StoreDecorator({
        user: {}
    })],
    args: {}
};
