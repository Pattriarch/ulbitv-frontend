import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppLink, AppLinkTheme } from '../AppLink/AppLink';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    tags: ['autodocs'],
    args: {
        to: '/'
    }
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Normal: Story = {
    args: {
        to: '/',
        children: 'Text',
        theme: AppLinkTheme.PRIMARY
    }
};

export const Secondary: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.SECONDARY
    }
};

export const Red: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.RED
    }
};

export const PrimaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        to: '/',
        children: 'Text',
        theme: AppLinkTheme.PRIMARY
    }
};

export const SecondaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        children: 'Text',
        theme: AppLinkTheme.SECONDARY
    }
};

export const RedDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        children: 'Text',
        theme: AppLinkTheme.RED
    }
};
