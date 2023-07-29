import type { Meta, StoryObj } from '@storybook/react';
import { ArticlesFilters } from './ArticlesFilters';

const meta: Meta<typeof ArticlesFilters> = {
	title: 'shared/ArticlesFilters',
	component: ArticlesFilters,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticlesFilters>;

export const Primary: Story = {
	args: {},
};
