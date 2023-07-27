import { withQuery } from '@storybook/addon-queryparams';
import type { Meta, StoryObj } from '@storybook/react';

import ArticleDetailsPage from './ArticleDetailsPage';

import { articleStub } from '@/shared/assets/tests/articleStub';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ArticleDetailsPage> = {
	title: 'pages/ArticleDetailsPage/ArticleDetailsPage',
	component: ArticleDetailsPage,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsPage>;

export const Normal: Story = {
	decorators: [
		StoreDecorator({
			articleDetails: {
				data: articleStub,
			},
			user: {
				authData: {
					id: '1',
					username: 'test',
				},
			},
		}),
		withQuery,
	],
	parameters: {
		queryParams: {
			id: '1',
		},
		mockData: [
			{
				url: `${__API__}/articles?_limit=3`,
				method: 'GET',
				status: 200,
				response: [
					{
						...articleStub,
						title: 'Статья 1',
						id: '1',
					},
					{
						...articleStub,
						title: 'Статья 2',
						id: '2',
					},
					{
						...articleStub,
						title: 'Статья 3',
						id: '3',
					},
				],
			},
		],
	},
	args: {
		id: '1',
	},
};
