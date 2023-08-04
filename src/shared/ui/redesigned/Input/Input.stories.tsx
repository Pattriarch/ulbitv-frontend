import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
	title: 'shared/redesigned/Input',
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
