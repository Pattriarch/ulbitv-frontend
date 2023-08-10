import type { Meta, StoryObj } from '@storybook/react';

import { ARTICLE_LIST_FIXTURE } from '../../../../entities/Article/tests/articlesListFixture';

import { ArticleInfiniteList } from './ArticleInfiniteList';

import { ArticleView } from '@/entities/Article';
import { USER_FIXTURE } from '@/entities/User/testing';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ArticleInfiniteList> = {
	title: 'widgets/ArticleInfiniteList',
	component: ArticleInfiniteList,
	tags: ['autodocs'],
	decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof ArticleInfiniteList>;

export const NormalBig: Story = {
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

export const NormalBigRedesigned: Story = {
	decorators: [
		NewDesignDecorator,
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

export const NormalSmall: Story = {
	decorators: [
		StoreDecorator({
			user: {
				authData: USER_FIXTURE,
			},
			articlesPage: {
				...ARTICLE_LIST_FIXTURE,
				view: ArticleView.SMALL,
			},
		}),
	],
};

export const NormalSmallRedesigned: Story = {
	decorators: [
		NewDesignDecorator,
		StoreDecorator({
			user: {
				authData: USER_FIXTURE,
			},
			articlesPage: {
				...ARTICLE_LIST_FIXTURE,
				view: ArticleView.SMALL,
			},
		}),
	],
};
