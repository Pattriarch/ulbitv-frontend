import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextTheme } from './Text';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description description lorem ipsun'
    }
};

export const Error: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description description lorem ipsun',
        theme: TextTheme.ERROR
    }
};

export const onlyTitle: Story = {
    args: {
        title: 'Title lorem ipsun'
    }
};

export const onlyText: Story = {
    args: {
        text: 'Description description lorem ipsun'
    }
};

export const PrimaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        title: 'Title lorem ipsun',
        text: 'Description description lorem ipsun'
    }
};

export const onlyTitleDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        title: 'Title lorem ipsun'
    }
};

export const onlyTextDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        text: 'Description description lorem ipsun'
    }
};
