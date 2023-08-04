// eslint-disable-next-line ulbitv-fsd/layer-imports-validator
import '@/app/styles/index.scss';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
	title: 'shared/redesigned/Button',
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

export const OutlineSizeXL: Story = {
	args: {
		children: 'Text',
		variant: 'outline',
		size: 'xl',
	},
};

export const Filled: Story = {
	args: {
		children: 'Text',
		variant: 'filled',
	},
};

export const FilledSizeL: Story = {
	args: {
		children: 'Text',
		variant: 'filled',
		size: 'l',
	},
};

export const FilledSizeXL: Story = {
	args: {
		children: 'Text',
		variant: 'filled',
		size: 'xl',
	},
};

export const SuccessOutline: Story = {
	args: {
		children: 'Text',
		variant: 'outline',
		color: 'success',
	},
};

export const SuccessFilled: Story = {
	args: {
		children: 'Text',
		variant: 'filled',
		color: 'success',
	},
};

export const ErrorOutline: Story = {
	args: {
		children: 'Text',
		variant: 'outline',
		color: 'error',
	},
};

export const ErrorFilled: Story = {
	args: {
		children: 'Text',
		variant: 'filled',
		color: 'error',
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
