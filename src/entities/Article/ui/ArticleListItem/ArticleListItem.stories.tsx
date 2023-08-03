import type { Meta, StoryObj } from '@storybook/react';

import { ArticleView } from '../../consts/articleConsts';

import { ArticleListItem } from './ArticleListItem';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { ARTICLE_STORYBOOK_FIXTURE } from '@/entities/Article/tests/articleStorybookFixture';

const meta: Meta<typeof ArticleListItem> = {
	title: 'entities/Article/ArticleListItem',
	component: ArticleListItem,
	tags: ['autodocs'],
	decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof ArticleListItem>;

export const NormalBig: Story = {
	args: {
		view: ArticleView.BIG,
		article: ARTICLE_STORYBOOK_FIXTURE,
	},
};

export const NormalSmall: Story = {
	args: {
		view: ArticleView.SMALL,
		article: ARTICLE_STORYBOOK_FIXTURE,
	},
};
