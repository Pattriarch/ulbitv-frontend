import type { Meta, StoryObj } from '@storybook/react';

import { RatingCard } from './RatingCard';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

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

export const NormalRedesigned: Story = {
	decorators: [NewDesignDecorator],
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

export const RatedRedesigned: Story = {
	decorators: [NewDesignDecorator],
	args: {
		title: 'Спасибо за оценку!',
		rate: 4,
	},
};
