// eslint-disable-next-line ulbitv-fsd/layer-imports-validator
import '@/app/styles/index.scss';
import type { Meta, StoryObj } from '@storybook/react';

import { AppLink } from './AppLink';

const meta: Meta<typeof AppLink> = {
	title: 'shared/redesigned/AppLink',
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
		variant: 'primary'
	},
};

export const Red: Story = {
	args: {
		children: 'Text',
		variant: 'red'
	},
};
