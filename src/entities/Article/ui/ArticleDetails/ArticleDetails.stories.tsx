import type { Meta, StoryObj } from '@storybook/react';

import { ArticleDetails } from './ArticleDetails';

import { articleStub } from '@/shared/assets/tests/articleStub';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

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
				data: articleStub,
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
				error: 'error',
			},
		}),
	],
	args: {},
};
