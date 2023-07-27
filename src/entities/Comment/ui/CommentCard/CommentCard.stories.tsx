import type { Meta, StoryObj } from '@storybook/react';

import { CommentCard } from './CommentCard';

const meta: Meta<typeof CommentCard> = {
	title: 'entities/Comment/CommentCard',
	component: CommentCard,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

export const Normal: Story = {
	args: {
		comment: {
			id: '1',
			text: 'hey!',
			user: {
				id: '1',
				username: 'Misha',
			},
		},
	},
};

export const Loading: Story = {
	decorators: [],
	args: {
		isLoading: true,
	},
};
