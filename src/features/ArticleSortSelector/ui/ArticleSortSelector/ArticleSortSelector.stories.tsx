import type { Meta, StoryObj } from '@storybook/react';

import { ArticleSortSelector } from './ArticleSortSelector';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

const meta: Meta<typeof ArticleSortSelector> = {
	title: 'features/ArticleSortSelector',
	component: ArticleSortSelector,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleSortSelector>;

export const Normal: Story = {

};

export const NormalRedesigned: Story = {
	decorators: [NewDesignDecorator]
};
