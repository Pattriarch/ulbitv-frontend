import type { Meta, StoryObj } from '@storybook/react';

import { ArticleView } from '../../consts/articleConsts';
import { ARTICLE_STORYBOOK_FIXTURE } from '../../tests/articleStorybookFixture';

import { ArticleListItem } from './ArticleListItem';


import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ArticleListItem> = {
	title: 'entities/Article/ArticleListItem',
	component: ArticleListItem,
	tags: ['autodocs'],
	args: {
		article: ARTICLE_STORYBOOK_FIXTURE,
	},
	decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof ArticleListItem>;

export const NormalBig: Story = {
	args: {
		view: ArticleView.BIG,
	},
};

export const NormalBigRedesigned: Story = {
	decorators: [NewDesignDecorator],
	args: {
		view: ArticleView.BIG,
	},
};

export const NormalSmall: Story = {
	args: {
		view: ArticleView.SMALL,
	},
};

export const NormalSmallRedesigned: Story = {
	decorators: [NewDesignDecorator],
	args: {
		view: ArticleView.SMALL,
	},
};
