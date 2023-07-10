import type { Meta, StoryObj } from '@storybook/react';

import { ArticleCard } from './ArticleCard';

const meta: Meta<typeof ArticleCard> = {
	title: 'shared/ArticleCard',
	component: ArticleCard,
	tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof ArticleCard>;

export const Primary: Story = {
	args: {}
};
