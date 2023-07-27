import { withQuery } from '@storybook/addon-queryparams';
import type { Meta, StoryObj } from '@storybook/react';

import ArticleEditPage from './ArticleEditPage';

import { articleStub } from '@/shared/assets/tests/articleStub';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

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
	},
	args: {},
};
