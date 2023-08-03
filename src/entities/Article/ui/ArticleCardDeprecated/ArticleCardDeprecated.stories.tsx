import type { Meta, StoryObj } from '@storybook/react';

import { ArticleCardDeprecated } from './ArticleCardDeprecated';

const meta: Meta<typeof ArticleCardDeprecated> = {
	title: 'shared/ArticleCardDeprecated',
	component: ArticleCardDeprecated,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleCardDeprecated>;

export const Normal: Story = {};
