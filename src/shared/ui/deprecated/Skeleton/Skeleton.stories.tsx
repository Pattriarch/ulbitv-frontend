import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
	title: 'shared/deprecated/SkeletonDeprecated',
	component: Skeleton,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Normal: Story = {
	args: {
		width: '100%',
		height: 200,
	},
};

export const Circle: Story = {
	args: {
		border: '50%',
		width: 100,
		height: 100,
	},
};
