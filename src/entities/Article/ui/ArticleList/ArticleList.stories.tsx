import type { Meta, StoryObj } from '@storybook/react';

import { ArticleView } from '../../consts/articleConsts';

import { ArticleList } from './ArticleList';

import { articleStub } from '@/shared/assets/tests/articleStub';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ArticleList> = {
	title: 'entities/Article/ArticleList',
	component: ArticleList,
	tags: ['autodocs'],
	decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof ArticleList>;

export const Big: Story = {
	args: {
		articles: new Array(3).fill(0).map((item, index) => ({
			...articleStub,
			id: String(index),
		})),
		virtualized: false,
		view: ArticleView.BIG,
	},
};

export const LoadingBig: Story = {
	args: {
		isLoading: true,
		virtualized: false,
		articles: [],
		view: ArticleView.BIG,
	},
};
export const Small: Story = {
	args: {
		articles: new Array(9).fill(0).map((item, index) => ({
			...articleStub,
			id: String(index),
		})),
		virtualized: false,
		view: ArticleView.SMALL,
	},
};

export const LoadingSmall: Story = {
	args: {
		isLoading: true,
		articles: [],
		virtualized: false,
		view: ArticleView.SMALL,
	},
};
