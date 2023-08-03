import type { Meta, StoryObj } from '@storybook/react';

import { ArticleCardRedesigned } from './ArticleCardRedesigned';

const meta: Meta<typeof ArticleCardRedesigned> = {
	title: 'shared/ArticleCardRedesigned',
	component: ArticleCardRedesigned,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleCardRedesigned>;

export const Normal: Story = {};
