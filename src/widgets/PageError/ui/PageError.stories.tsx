// eslint-disable-next-line ulbitv-fsd/layer-imports-validator
import '@/app/styles/index.scss';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { PageError } from './PageError';

const meta: Meta<typeof PageError> = {
    title: 'widgets/PageError',
    component: PageError,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof PageError>;

export const Light: Story = {
    args: {}
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {}
};
