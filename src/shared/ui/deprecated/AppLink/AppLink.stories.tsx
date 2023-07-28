// eslint-disable-next-line ulbitv-fsd/layer-imports-validator
import '@/app/styles/index.scss';
import type { Meta, StoryObj } from '@storybook/react';

import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
	title: 'shared/AppLink',
	component: AppLink,
	tags: ['autodocs'],
	args: {
		to: '/',
	},
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Normal: Story = {
	args: {
		to: '/',
		children: 'Text',
		theme: AppLinkTheme.PRIMARY,
	},
};

export const Secondary: Story = {
	args: {
		children: 'Text',
		theme: AppLinkTheme.SECONDARY,
	},
};

export const Red: Story = {
	args: {
		children: 'Text',
		theme: AppLinkTheme.RED,
	},
};
