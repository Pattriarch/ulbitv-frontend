import type { Meta, StoryObj } from '@storybook/react';

import { ArticlesFilters } from './ArticlesFilters';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

const meta: Meta<typeof ArticlesFilters> = {
	title: 'widgets/ArticlesFilters',
	component: ArticlesFilters,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticlesFilters>;

export const Normal: Story = {};

export const NormalRedesigned: Story = {
	decorators: [NewDesignDecorator],
};
