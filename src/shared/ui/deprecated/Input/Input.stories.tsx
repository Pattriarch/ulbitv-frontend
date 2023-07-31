import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
	title: 'shared/InputDeprecated',
	component: Input,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Normal: Story = {
	args: {
		placeholder: 'Введите текст',
		value: 'Text',
	},
};

export const Outlined: Story = {
	args: {
		theme: 'outlined',
		placeholder: 'Введите текст',
		value: 'Text',
	},
};
