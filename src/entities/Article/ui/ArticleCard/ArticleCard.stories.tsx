import type { Meta, StoryObj } from '@storybook/react';

import { ArticleCard } from './ArticleCard';

import { getStorybookImage } from '@/shared/lib/tests/getStorybookImage/getStorybookImage';

const meta: Meta<typeof ArticleCard> = {
	title: 'entities/Article/ArticleCard',
	component: ArticleCard,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleCard>;

export const Normal: Story = {
	args: {
		data: {
			title: 'Статья',
			subtitle: 'Подзаголовок',
			img: getStorybookImage(),
		},
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
