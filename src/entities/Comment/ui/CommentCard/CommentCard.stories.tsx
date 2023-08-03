import type { Meta, StoryObj } from '@storybook/react';

import { CommentCard } from './CommentCard';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { COMMENT_FIXTURE } from '@/entities/Comment/tests/commentFixture';

const meta: Meta<typeof CommentCard> = {
	title: 'entities/Comment/CommentCard',
	component: CommentCard,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

const defaultArgs = {
	comment: COMMENT_FIXTURE,
};

export const Normal: Story = {
	args: defaultArgs,
};

export const NormalRedesigned: Story = {
	decorators: [NewDesignDecorator],
	args: defaultArgs,
};

export const Loading: Story = {
	args: {
		isLoading: true,
	},
};
