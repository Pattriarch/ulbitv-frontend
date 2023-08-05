import type { Meta, StoryObj } from '@storybook/react';

import { AdditionalInfoContainer } from './AdditionalInfoContainer';

import { ARTICLE_STORYBOOK_FIXTURE } from '@/entities/Article';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof AdditionalInfoContainer> = {
	title: 'widgets/AdditionalInfoContainer',
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
