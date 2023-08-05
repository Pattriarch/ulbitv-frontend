import type { Meta, StoryObj } from '@storybook/react';

import { COMMENT_FIXTURE } from '../../tests/commentFixture';

import { CommentCard } from './CommentCard';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

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
export const LoadingRedesigned: Story = {
	decorators: [NewDesignDecorator],
	args: {
		isLoading: true,
	},
};

