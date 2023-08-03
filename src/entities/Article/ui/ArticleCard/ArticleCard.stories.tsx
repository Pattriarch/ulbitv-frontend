import type { Meta, StoryObj } from '@storybook/react';

import { ArticleCard } from './ArticleCard';


import { ARTICLE_STORYBOOK_FIXTURE } from '@/entities/Article/tests/articleStorybookFixture';

const meta: Meta<typeof ArticleCard> = {
	title: 'entities/Article/ArticleCard',
	component: ArticleCard,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleCard>;

export const Normal: Story = {
	args: {
		data: ARTICLE_STORYBOOK_FIXTURE,
	},
};

export const Loading: Story = {
	args: {
		isLoading: true,
	},
};

export const Error: Story = {
	args: {
		error: 'Произошла ошибка при загрузке статьи',
	},
};
