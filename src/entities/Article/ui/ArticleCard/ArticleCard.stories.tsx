import type { Meta, StoryObj } from '@storybook/react';

import { ArticleCard } from './ArticleCard';

import { articleStub } from '@/shared/assets/tests/articleStub';

const meta: Meta<typeof ArticleCard> = {
	title: 'entities/Article/ArticleCard',
	component: ArticleCard,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleCard>;

export const Normal: Story = {
	args: {
		data: articleStub,
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
