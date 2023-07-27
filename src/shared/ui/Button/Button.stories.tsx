// eslint-disable-next-line ulbitv-fsd/layer-imports-validator
import '@/app/styles/index.scss';
import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonSize, ButtonTheme } from './Button';

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
		theme: ButtonTheme.CLEAR,
	},
};

export const ClearInverted: Story = {
	args: {
		children: 'Text',
		theme: ButtonTheme.CLEAR_INVERTED,
	},
};

export const Outline: Story = {
	args: {
		children: 'Text',
		theme: ButtonTheme.OUTLINE,
	},
};

export const OutlineSizeL: Story = {
	args: {
		children: 'Text',
		theme: ButtonTheme.OUTLINE,
		size: ButtonSize.L,
	},
};

export const OutlineXL: Story = {
	args: {
		children: 'Text',
		theme: ButtonTheme.OUTLINE,
		size: ButtonSize.XL,
	},
};

export const BackgroundTheme: Story = {
	args: {
		children: 'Text',
		theme: ButtonTheme.BACKGROUND,
	},
};

export const BackgroundInverted: Story = {
	args: {
		children: 'Text',
		theme: ButtonTheme.BACKGROUND_INVERTED,
	},
};

export const Square: Story = {
	args: {
		children: '>',
		theme: ButtonTheme.BACKGROUND_INVERTED,
		square: true,
	},
};

export const SquareSizeL: Story = {
	args: {
		children: '>',
		theme: ButtonTheme.BACKGROUND_INVERTED,
		square: true,
		size: ButtonSize.L,
	},
};

export const SquareSizeXL: Story = {
	args: {
		children: '>',
		theme: ButtonTheme.BACKGROUND_INVERTED,
		square: true,
		size: ButtonSize.XL,
	},
};

export const Disabled: Story = {
	args: {
		children: '>',
		theme: ButtonTheme.OUTLINE,
		disabled: true,
	},
};

export const FullWidth: Story = {
	args: {
		children: '>',
		fullWidth: true,
		theme: ButtonTheme.OUTLINE,
	},
};
