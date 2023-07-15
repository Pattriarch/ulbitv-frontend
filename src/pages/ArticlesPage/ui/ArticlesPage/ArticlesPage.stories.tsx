import type { Meta, StoryObj } from '@storybook/react';
import ArticlePage from './ArticlesPage';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ArticlePage> = {
    title: 'pages/Article/ArticlesPage',
    component: ArticlePage,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})]
};

export default meta;
type Story = StoryObj<typeof ArticlePage>;

export const Normal: Story = {
    args: {}
};
