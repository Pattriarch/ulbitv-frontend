import type { Meta, StoryObj } from '@storybook/react';
import { ArticleListItemRedesigned } from './ArticleListItemRedesigned';

const meta: Meta<typeof ArticleListItemRedesigned> = {
	title: 'shared/ArticleListItemRedesigned',
	component: ArticleListItemRedesigned,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleListItemRedesigned>;

export const Primary: Story = {
	args: {},
};
