import type { Meta, StoryObj } from '@storybook/react';

import { ArticleAdditionalInfoContainer } from './ArticleAdditionalInfoContainer';

import { ARTICLE_STORYBOOK_FIXTURE } from '@/entities/Article/testing';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ArticleAdditionalInfoContainer> = {
	title: 'widgets/ArticleAdditionalInfoContainer',
	component: ArticleAdditionalInfoContainer,
	tags: ['autodocs'],
	decorators: [StoreDecorator({
		articleDetails: {
			data: ARTICLE_STORYBOOK_FIXTURE
		}
	})],
};

export default meta;
type Story = StoryObj<typeof ArticleAdditionalInfoContainer>;

export const Normal: Story = {};
