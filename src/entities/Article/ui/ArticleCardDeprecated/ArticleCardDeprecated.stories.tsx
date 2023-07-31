import type { Meta, StoryObj } from '@storybook/react';

import { ArticleCardDeprecated } from './ArticleCardDeprecated';

const meta: Meta<typeof ArticleCardDeprecated> = {
	title: 'shared/ArticleCardRedesigned',
	component: ArticleCardDeprecated,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleCardDeprecated>;

export const Primary: Story = {
	args: {},
};
