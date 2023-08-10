import type { Meta, StoryObj } from '@storybook/react';

import ArticlePage from './ArticlesPage';

import { ArticleView } from '@/entities/Article';
import { ARTICLE_LIST_FIXTURE } from '@/entities/Article/testing';
import { USER_FIXTURE } from '@/entities/User/testing';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ArticlePage> = {
	title: 'pages/ArticlesPage/ArticlesPage',
	component: ArticlePage,
	tags: ['autodocs'],
	decorators: [
		StoreDecorator({
			user: {
				authData: USER_FIXTURE,
			},
			articlesPage: {
				...ARTICLE_LIST_FIXTURE,
				view: ArticleView.BIG,
			},
		}),
	],
};

export default meta;
type Story = StoryObj<typeof ArticlePage>;

export const Normal: Story = {};

export const NormalRedesigned: Story = {
	decorators: [NewDesignDecorator],
};
