import type { Meta, StoryObj } from '@storybook/react';

import { CommentList } from './CommentList';

const meta: Meta<typeof CommentList> = {
	title: 'entities/Comment/CommentList',
	component: CommentList,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Normal: Story = {
	args: {
		comments: [
			{
				id: '1',
				text: 'hey!',
				user: {
					id: '1',
					username: 'Misha',
				},
			},
			{
				id: '2',
				text: 'hey again!',
				user: {
					id: '2',
					username: 'Dima',
				},
			},
		],
	},
};

export const Loading: Story = {
	args: {
		isLoading: true,
	},
};
