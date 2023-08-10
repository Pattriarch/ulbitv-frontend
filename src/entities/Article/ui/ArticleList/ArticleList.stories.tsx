import type { Meta, StoryObj } from '@storybook/react';

import { ArticleView } from '../../consts/articleConsts';
import { ARTICLE_STORYBOOK_FIXTURE } from '../../tests/articleStorybookFixture';

import { ArticleList } from './ArticleList';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ArticleList> = {
	title: 'entities/Article/ArticleList',
	component: ArticleList,
	tags: ['autodocs'],
	args: { virtualized: false },
	decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof ArticleList>;

export const Big: Story = {
	args: {
		articles: new Array(3).fill(0).map((item, index) => ({
			...ARTICLE_STORYBOOK_FIXTURE,
			id: String(index),
		})),
		view: ArticleView.BIG,
	},
};

export const BigRedesigned: Story = {
	decorators: [NewDesignDecorator],
	args: {
		articles: new Array(3).fill(0).map((item, index) => ({
			...ARTICLE_STORYBOOK_FIXTURE,
			id: String(index),
		})),
		view: ArticleView.BIG,
	},
};

export const LoadingBig: Story = {
	args: {
		isLoading: true,
		articles: [],
		view: ArticleView.BIG,
	},
};

export const LoadingBigRedesigned: Story = {
	decorators: [NewDesignDecorator],
	args: {
		isLoading: true,
		articles: [],
		view: ArticleView.BIG,
	},
};

export const Small: Story = {
	args: {
		articles: new Array(9).fill(0).map((item, index) => ({
			...ARTICLE_STORYBOOK_FIXTURE,
			id: String(index),
		})),
		view: ArticleView.SMALL,
	},
};

export const SmallRedesigned: Story = {
	decorators: [NewDesignDecorator],
	args: {
		articles: new Array(9).fill(0).map((item, index) => ({
			...ARTICLE_STORYBOOK_FIXTURE,
			id: String(index),
		})),
		view: ArticleView.SMALL,
	},
};

export const LoadingSmall: Story = {
	args: {
		isLoading: true,
		articles: [],
		view: ArticleView.SMALL,
	},
};

export const LoadingSmallRedesigned: Story = {
	decorators: [NewDesignDecorator],
	args: {
		isLoading: true,
		articles: [],
		view: ArticleView.SMALL,
	},
};
