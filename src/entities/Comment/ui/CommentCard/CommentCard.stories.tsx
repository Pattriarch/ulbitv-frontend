import type { Meta, StoryObj } from '@storybook/react';

import { CommentCard } from './CommentCard';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

const meta: Meta<typeof CommentCard> = {
	title: 'entities/Comment/CommentCard',
	component: CommentCard,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

const args = {
	comment: {
		id: '1',
		text: 'hey!',
		user: {
			id: '1',
			username: 'Misha',
		},
	},
};

export const Normal: Story = {
	args,
};

export const NormalRedesigned: Story = {
	decorators: [NewDesignDecorator],
	args,
};

export const Loading: Story = {
	decorators: [],
	args: {
		isLoading: true,
	},
};
