import type { Meta, StoryObj } from '@storybook/react';

import { ArticleDetailsContainer } from './ArticleDetailsContainer';

const meta: Meta<typeof ArticleDetailsContainer> = {
	title: 'shared/ArticleDetailsContainer',
	component: ArticleDetailsContainer,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsContainer>;

export const Primary: Story = {
	args: {},
};
