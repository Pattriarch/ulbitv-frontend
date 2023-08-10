import type { Meta, StoryObj } from '@storybook/react';

import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';

import { ARTICLE_STORYBOOK_FIXTURE } from '@/entities/Article/testing';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';


const meta: Meta<typeof ArticleDetailsPageHeader> = {
	title: 'pages/ArticleDetailsPage/ArticleDetailsPageHeader',
	component: ArticleDetailsPageHeader,
	tags: ['autodocs'],
	decorators: [
		StoreDecorator({
			articleDetails: {
				data: ARTICLE_STORYBOOK_FIXTURE,
			},
			user: {
				authData: { id: '1' },
			},
		}),
	],
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsPageHeader>;

export const Normal: Story = {
};
