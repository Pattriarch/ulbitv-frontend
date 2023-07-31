import type { Meta, StoryObj } from '@storybook/react';

import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
	title: 'shared/TextareaDeprecated',
	component: Textarea,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Normal: Story = {
	args: {
		value: 'Lorem ipsum dolor sit amet consectetur adipiscing elit lobortis, volutpat turpis netus euismod scelerisque pretium nullam neque dictumst, tristique posuere nulla pellentesque ad donec sed. Diam fusce suspendisse cras viverra nisl purus bibendum rhoncus sagittis',
	},
};

export const Outlined: Story = {
	args: {
		theme: 'outlined',
		value: 'Lorem ipsum dolor sit amet consectetur adipiscing elit lobortis, volutpat turpis netus euismod scelerisque pretium nullam neque dictumst, tristique posuere nulla pellentesque ad donec sed. Diam fusce suspendisse cras viverra nisl purus bibendum rhoncus sagittis',
	},
};
