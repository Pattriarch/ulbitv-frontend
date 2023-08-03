import type { Meta, StoryObj } from '@storybook/react';

import { ArticleDetails } from './ArticleDetails';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { ARTICLE_STORYBOOK_FIXTURE } from '@/entities/Article/tests/articleStorybookFixture';

const meta: Meta<typeof ArticleDetails> = {
	title: 'entities/Article/ArticleDetails',
	component: ArticleDetails,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleDetails>;

export const Normal: Story = {
	decorators: [
		StoreDecorator({
			articleDetails: {
				data: ARTICLE_STORYBOOK_FIXTURE,
			},
		}),
	],
	args: {},
};

export const Loading: Story = {
	decorators: [
		StoreDecorator({
			articleDetails: {
				isLoading: true,
			},
		}),
	],
	args: {},
};

export const Error: Story = {
	decorators: [
		StoreDecorator({
			articleDetails: {
				error: 'Произошла ошибка при загрузке статьи',
			},
		}),
	],
	args: {},
};
