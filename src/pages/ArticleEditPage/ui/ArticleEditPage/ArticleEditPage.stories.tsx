import type { Meta, StoryObj } from '@storybook/react';

import ArticleEditPage from './ArticleEditPage';


import { ARTICLE_STORYBOOK_FIXTURE } from '@/entities/Article/testing';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ArticleEditPage> = {
	title: 'pages/ArticleEditPage',
	component: ArticleEditPage,
	tags: ['autodocs'],
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
	],
	parameters: {
		queryParams: {
			id: '1',
		},
	},
};

export default meta;
type Story = StoryObj<typeof ArticleEditPage>;

export const Normal: Story = {
};

export const NormalRedesigned: Story = {
	decorators: [NewDesignDecorator]
};
