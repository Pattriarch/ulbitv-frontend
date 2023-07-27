import type { Meta, StoryObj } from '@storybook/react';

import { RatingCard } from './RatingCard';

const meta: Meta<typeof RatingCard> = {
	title: 'entities/Rating/RatingCard',
	component: RatingCard,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RatingCard>;

export const Normal: Story = {
	args: {
		title: 'Укажите оценку',
	},
};

export const Rated: Story = {
	args: {
		title: 'Спасибо за оценку!',
		rate: 4,
	},
};
