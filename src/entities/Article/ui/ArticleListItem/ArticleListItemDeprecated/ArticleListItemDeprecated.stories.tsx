import type { Meta, StoryObj } from '@storybook/react';

import { ArticleListItemDeprecated } from './ArticleListItemDeprecated';

const meta: Meta<typeof ArticleListItemDeprecated> = {
	title: 'shared/ArticleListItemDeprecated',
	component: ArticleListItemDeprecated,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleListItemDeprecated>;

export const Primary: Story = {
	args: {},
};
