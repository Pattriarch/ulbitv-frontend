import { withQuery } from '@storybook/addon-queryparams';
import type { Meta, StoryObj } from '@storybook/react';

import ArticleEditPage from './ArticleEditPage';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { ARTICLE_STORYBOOK_FIXTURE } from '@/entities/Article/tests/articleStorybookFixture';

const meta: Meta<typeof ArticleEditPage> = {
	title: 'pages/ArticleEditPage',
	component: ArticleEditPage,
	tags: ['autodocs'],
	decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof ArticleEditPage>;

export const Normal: Story = {
	decorators: [
		StoreDecorator({
			addArticleForm: {
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
	},
	args: {},
};
