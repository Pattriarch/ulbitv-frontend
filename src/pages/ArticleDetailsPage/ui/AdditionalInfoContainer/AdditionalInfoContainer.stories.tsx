import type { Meta, StoryObj } from '@storybook/react';

import { AdditionalInfoContainer } from './AdditionalInfoContainer';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ARTICLE_STORYBOOK_FIXTURE } from '@/entities/Article/tests/articleStorybookFixture';

const meta: Meta<typeof AdditionalInfoContainer> = {
	title: 'pages/ArticleDetailsPage/AdditionalInfoContainer',
	component: AdditionalInfoContainer,
	tags: ['autodocs'],
	decorators: [StoreDecorator({
		articleDetails: {
			data: ARTICLE_STORYBOOK_FIXTURE
		}
	})],
};

export default meta;
type Story = StoryObj<typeof AdditionalInfoContainer>;

export const Normal: Story = {};
