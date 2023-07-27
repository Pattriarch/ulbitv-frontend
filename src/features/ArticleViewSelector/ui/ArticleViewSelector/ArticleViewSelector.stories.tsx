import type { Meta, StoryObj } from '@storybook/react';

import { ArticleViewSelector } from './ArticleViewSelector';

import { ArticleView } from '@/entities/Article';

const meta: Meta<typeof ArticleViewSelector> = {
	title: 'features/ArticleViewSelector',
	component: ArticleViewSelector,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleViewSelector>;

export const Normal: Story = {
	args: {},
};

export const SmallSelected: Story = {
	args: {
		view: ArticleView.SMALL,
	},
};

export const BigSelected: Story = {
	args: {
		view: ArticleView.BIG,
	},
};
