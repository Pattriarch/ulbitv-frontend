import type { Meta, StoryObj } from '@storybook/react';

import { StarRating } from './StarRating';

const meta: Meta<typeof StarRating> = {
	title: 'shared/deprecated/StarRatingDeprecated',
	component: StarRating,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StarRating>;

export const Normal: Story = {};

export const Selected: Story = {
	args: {
		selectedStars: 3,
	},
};

export const Size48: Story = {
	args: {
		size: 48,
	},
};

export const SelectedSize48: Story = {
	args: {
		selectedStars: 4,
		size: 48,
	},
};
