import type { Meta, StoryObj } from '@storybook/react';

import { ArticleDetails } from './ArticleDetails';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { ARTICLE_STORYBOOK_FIXTURE } from '@/entities/Article/tests/articleStorybookFixture';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

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
	
};

export const NormalRedesigned: Story = {
	decorators: [
		NewDesignDecorator,
		StoreDecorator({
			articleDetails: {
				data: ARTICLE_STORYBOOK_FIXTURE,
			},
		}),
	],
	
};

export const Loading: Story = {
	decorators: [
		StoreDecorator({
			articleDetails: {
				isLoading: true,
			},
		}),
	],
	
};

export const LoadingRedesigned: Story = {
	decorators: [
		NewDesignDecorator,
		StoreDecorator({
			articleDetails: {
				isLoading: true,
			},
		}),
	],
	
};

export const Error: Story = {
	decorators: [
		StoreDecorator({
			articleDetails: {
				error: 'Произошла ошибка при загрузке статьи',
			},
		}),
	],
	
};

export const ErrorRedesigned: Story = {
	decorators: [
		NewDesignDecorator,
		StoreDecorator({
			articleDetails: {
				error: 'Произошла ошибка при загрузке статьи',
			},
		}),
	],
	
};
