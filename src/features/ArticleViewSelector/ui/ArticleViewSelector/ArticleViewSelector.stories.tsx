import type { Meta, StoryObj } from '@storybook/react';

import { ArticleViewSelector } from './ArticleViewSelector';

import { ArticleView } from '@/entities/Article';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

const meta: Meta<typeof ArticleViewSelector> = {
	title: 'features/ArticleViewSelector',
	component: ArticleViewSelector,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleViewSelector>;

export const Normal: Story = {

};

export const NormalRedesigned: Story = {
	decorators: [NewDesignDecorator]
};

export const SmallSelected: Story = {
	args: {
		view: ArticleView.SMALL,
	},
};

export const SmallSelectedRedesigned: Story = {
	decorators: [NewDesignDecorator],
	args: {
		view: ArticleView.SMALL,
	},
};

export const BigSelected: Story = {
	args: {
		view: ArticleView.BIG,
	},
};

export const BigSelectedRedesigned: Story = {
	decorators: [NewDesignDecorator],
	args: {
		view: ArticleView.BIG,
	},
};

