import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';

import { getStorybookImage } from '@/shared/lib/tests/getStorybookImage/getStorybookImage';

const meta: Meta<typeof Avatar> = {
	title: 'shared/redesigned/Avatar',
	component: Avatar,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Normal: Story = {
	args: {
		size: 150,
		src: getStorybookImage(),
	},
};

export const Small: Story = {
	args: {
		size: 50,
		src: getStorybookImage(),
	},
};
