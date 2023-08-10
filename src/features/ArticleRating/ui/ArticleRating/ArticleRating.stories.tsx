import type { Meta, StoryObj } from '@storybook/react';

import ArticleRating from './ArticleRating';

import { USER_FIXTURE } from '@/entities/User/testing';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ArticleRating> = {
	title: 'features/ArticleRating',
	component: ArticleRating,
	tags: ['autodocs'],
	decorators: [
		StoreDecorator({
			user: {
				authData: USER_FIXTURE,
			},
		}),
	],
	args: {
		articleId: '1',
	},
};

export default meta;
type Story = StoryObj<typeof ArticleRating>;

const successMockData = [
	{
		url: `${__API__}/article-ratings?userId=1&articleId=1`,
		method: 'GET',
		status: 200,
		response: [
			{
				rate: 3,
			},
		],
	},
];

const errorMockData = [
	{
		url: `${__API__}/article-ratings?userId=1&articleId=1`,
		method: 'GET',
		status: 404,
		response: [],
	},
];

export const Normal: Story = {
	parameters: {
		mockData: successMockData,
	},
};

export const NormalRedesigned: Story = {
	parameters: {
		mockData: successMockData,
	},
};

export const WithoutRate: Story = {
	parameters: {
		mockData: errorMockData,
	},
};

export const WithoutRateRedesigned: Story = {
	parameters: {
		mockData: errorMockData,
	},
};
