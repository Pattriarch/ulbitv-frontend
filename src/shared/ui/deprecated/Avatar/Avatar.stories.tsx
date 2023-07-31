import type { Meta, StoryObj } from '@storybook/react';

import AvatarImg from '../../../assets/tests/storybook.jpg';

import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
	title: 'shared/AvatarDeprecated',
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
