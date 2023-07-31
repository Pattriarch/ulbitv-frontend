// eslint-disable-next-line ulbitv-fsd/layer-imports-validator
import '@/app/styles/index.scss';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
	title: 'shared/Button',
	component: Button,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Normal: Story = {
	args: {
		children: 'Text',
	},
};

export const Clear: Story = {
	args: {
		children: 'Text',
		variant: 'clear',
	},
};

export const Outline: Story = {
	args: {
		children: 'Text',
		variant: 'outline',
	},
};

export const OutlineSizeL: Story = {
	args: {
		children: 'Text',
		variant: 'outline',
		size: 'l',
	},
};

export const OutlineXL: Story = {
	args: {
		children: 'Text',
		variant: 'outline',
		size: 'xl',
	},
};

export const FilledVariant: Story = {
	args: {
		children: 'Text',
		variant: 'filled',
	},
};

export const Square: Story = {
	args: {
		children: '>',
		square: true,
	},
};

export const SquareSizeL: Story = {
	args: {
		children: '>',
		square: true,
		size: 'l',
	},
};

export const SquareSizeXL: Story = {
	args: {
		children: '>',
		square: true,
		size: 'xl',
	},
};

export const Disabled: Story = {
	args: {
		children: '>',
		disabled: true,
	},
};

export const FullWidth: Story = {
	args: {
		children: '>',
		fullWidth: true,
		variant: 'outline',
	},
};
