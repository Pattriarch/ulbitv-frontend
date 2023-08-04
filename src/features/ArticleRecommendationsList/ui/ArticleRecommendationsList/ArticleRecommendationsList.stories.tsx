import type { Meta, StoryObj } from '@storybook/react';

import { ArticleRecommendationsList } from './ArticleRecommendationsList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ARTICLE_STORYBOOK_FIXTURE } from '@/entities/Article/tests/articleStorybookFixture';
import { USER_FIXTURE } from '@/entities/User/tests/userFixture';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

const meta: Meta<typeof ArticleRecommendationsList> = {
	title: 'features/ArticleRecommendationsList',
	component: ArticleRecommendationsList,
	tags: ['autodocs'],
	decorators: [StoreDecorator({
		user: {
			authData: USER_FIXTURE,
		},
	})],
	parameters: {
		mockData: [
			{
				url: `${__API__}/articles?_limit=3&_expand=user`,
				method: 'GET',
				status: 200,
				response: [
					{ ...ARTICLE_STORYBOOK_FIXTURE, id: '1', title: 'test 1' },
					{ ...ARTICLE_STORYBOOK_FIXTURE, id: '2', title: 'test 2' },
					{ ...ARTICLE_STORYBOOK_FIXTURE, id: '3', title: 'test 3' },
				],
			},
		],
	},
};

export default meta;
type Story = StoryObj<typeof ArticleRecommendationsList>;

export const Normal: Story = {
};

export const NormalRedesigned: Story = {
	decorators: [NewDesignDecorator]
};
