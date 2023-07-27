import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { ArticleTypeTabs } from './ArticleTypeTabs';

import { ArticleType } from '@/entities/Article';

const meta: Meta<typeof ArticleTypeTabs> = {
	title: 'features/ArticleTypeTabs',
	component: ArticleTypeTabs,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleTypeTabs>;

export const Normal: Story = {
	args: {
		onChangeTab: action('onChangeTab'),
	},
};

export const ITSelected: Story = {
	args: {
		value: ArticleType.IT,
		onChangeTab: action('onChangeTab'),
	},
};
