import type { Meta, StoryObj } from '@storybook/react';

import { ARTICLE_STORYBOOK_FIXTURE } from '../../tests/articleStorybookFixture';

import { ArticleCard } from './ArticleCard';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

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

export const NormalRedesigned: Story = {
	decorators: [NewDesignDecorator],
	args: {
		data: ARTICLE_STORYBOOK_FIXTURE,
	},
};

export const Loading: Story = {
	args: {
		isLoading: true,
	},
};

export const LoadingRedesigned: Story = {
	decorators: [NewDesignDecorator],
	args: {
		isLoading: true,
	},
};

export const Error: Story = {
	args: {
		error: 'Произошла ошибка при загрузке статьи',
	},
};

export const ErrorRedesigned: Story = {
	decorators: [NewDesignDecorator],
	args: {
		error: 'Произошла ошибка при загрузке статьи',
	},
};
