import type { Meta, StoryObj } from '@storybook/react';

import ArticlePage from './ArticlesPage';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ARTICLES_PAGE_FIXTURE } from '@/pages/ArticlesPage/model/tests/articlesPageFixture';
import { USER_FIXTURE } from '@/entities/User/tests/userFixture';
import { ARTICLE_LIST_FIXTURE } from '@/widgets/ArticleInfiniteList/tests/articlesListFixture';
import { ArticleView } from '@/entities/Article';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

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
