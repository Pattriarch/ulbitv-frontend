import type { Meta, StoryObj } from '@storybook/react';
import ArticlePage from './ArticlesPage';

const meta: Meta<typeof ArticlePage> = {
    title: 'shared/ArticlesPage',
    component: ArticlePage,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof ArticlePage>;

export const Primary: Story = {
    args: {}
};
