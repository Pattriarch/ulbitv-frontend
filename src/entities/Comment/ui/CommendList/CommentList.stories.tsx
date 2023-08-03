import type { Meta, StoryObj } from '@storybook/react';

import { CommentList } from './CommentList';
import { COMMENTS_FIXTURE } from '@/entities/Comment/tests/commentFixture';

const meta: Meta<typeof CommentList> = {
	title: 'entities/Comment/CommentList',
	component: CommentList,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Normal: Story = {
	args: {
		comments: COMMENTS_FIXTURE,
	},
};

export const Loading: Story = {
	args: {
		isLoading: true,
	},
};
