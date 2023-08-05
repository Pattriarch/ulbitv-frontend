import type { Meta, StoryObj } from '@storybook/react';

import { ArticleDetailsContainer } from './ArticleDetailsContainer';

import { ARTICLE_STORYBOOK_FIXTURE } from '@/entities/Article';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ArticleDetailsContainer> = {
	title: 'widgets/ArticleDetailsContainer',
	component: ArticleDetailsContainer,
	tags: ['autodocs'],
	decorators: [
		StoreDecorator({
			articleDetails: {
				data: ARTICLE_STORYBOOK_FIXTURE
			},
		}),
	],
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsContainer>;

export const Normal: Story = {};

export const NormalRedesigned: Story = {
	decorators: [NewDesignDecorator],
};
