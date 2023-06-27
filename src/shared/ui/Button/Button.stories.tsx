import type { Meta, StoryObj } from '@storybook/react';
import { Button, ThemeButton } from './Button';
import 'app/styles/index.scss';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Text'
    }
};

export const Clear: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR
    }
};

export const Outline: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE
    }
};

export const OutlineDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE
    }
};