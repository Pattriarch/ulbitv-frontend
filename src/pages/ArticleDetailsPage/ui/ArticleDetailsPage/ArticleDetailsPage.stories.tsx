import { withQuery } from '@storybook/addon-queryparams';
import type { Meta, StoryObj } from '@storybook/react';

import ArticleDetailsPage from './ArticleDetailsPage';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { ARTICLE_STORYBOOK_FIXTURE } from '@/entities/Article/tests/articleStorybookFixture';

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
				data: ARTICLE_STORYBOOK_FIXTURE,
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
						...ARTICLE_STORYBOOK_FIXTURE,
						title: 'Статья 1',
						id: '1',
					},
					{
						...ARTICLE_STORYBOOK_FIXTURE,
						title: 'Статья 2',
						id: '2',
					},
					{
						...ARTICLE_STORYBOOK_FIXTURE,
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
