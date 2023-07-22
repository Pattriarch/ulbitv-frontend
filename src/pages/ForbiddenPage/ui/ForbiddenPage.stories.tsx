// eslint-disable-next-line ulbitv-fsd/layer-imports-validator
import '@/app/styles/index.scss';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import ForbiddenPage from './ForbiddenPage';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof ForbiddenPage> = {
    title: 'pages/ForbiddenPage',
    component: ForbiddenPage,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})]
};

export default meta;
type Story = StoryObj<typeof ForbiddenPage>;

export const Normal: Story = {
    args: {}
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {}
};
