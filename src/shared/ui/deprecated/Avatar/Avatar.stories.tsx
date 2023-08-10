import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';

import AvatarImg from '@/shared/lib/tests/getStorybookImage/images/storybook.jpg';

const meta: Meta<typeof Avatar> = {
	title: 'shared/deprecated/AvatarDeprecated',
	component: Avatar,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Normal: Story = {
	args: {
		size: 150,
		src: AvatarImg,
	},
};

export const Small: Story = {
	args: {
		size: 50,
		src: AvatarImg,
	},
};
