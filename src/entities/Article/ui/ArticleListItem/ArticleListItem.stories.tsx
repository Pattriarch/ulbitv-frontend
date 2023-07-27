import type { Meta, StoryObj } from '@storybook/react';

import { ArticleView } from '../../consts/articleConsts';

import { ArticleListItem } from './ArticleListItem';

import { articleStub } from '@/shared/assets/tests/articleStub';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

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
		article: articleStub,
	},
};

export const NormalSmall: Story = {
	args: {
		view: ArticleView.SMALL,
		article: articleStub,
	},
};
