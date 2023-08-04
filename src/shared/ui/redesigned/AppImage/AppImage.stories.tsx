import type { Meta, StoryObj } from '@storybook/react';

import { AppImage } from './AppImage';

import { getStorybookImage } from '@/shared/lib/tests/getStorybookImage/getStorybookImage';

const meta: Meta<typeof AppImage> = {
	title: 'shared/redesigned/AppImage',
	component: AppImage,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AppImage>;

export const Normal: Story = {
	args: {
		src: getStorybookImage(),
		fallback: <p>fallback</p>,
	},
};
