import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../../../Button/Button';

import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
	title: 'shared/Dropdown',
	component: Dropdown,
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<div style={{ padding: 100 }}>
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const args = {
	trigger: <Button>Open</Button>,
	items: [
		{
			content: 'first',
		},
		{
			content: 'second',
		},
		{
			content: 'third',
		},
	],
};

export const Normal: Story = {
	args: {
		...args,
	},
};

export const TopLeft: Story = {
	args: {
		...args,
		direction: 'topLeft',
	},
};

export const TopRight: Story = {
	args: {
		...args,
		direction: 'topRight',
	},
};

export const BottomLeft: Story = {
	args: {
		...args,
		direction: 'bottomLeft',
	},
};

export const BottomRight: Story = {
	args: {
		...args,
		direction: 'bottomRight',
	},
};
