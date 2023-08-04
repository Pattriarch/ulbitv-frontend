import type { Meta, StoryObj } from '@storybook/react';

import { ListBox } from './ListBox';

const meta: Meta<typeof ListBox> = {
	title: 'shared/deprecated/ListBoxDeprecated',
	component: ListBox,
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
type Story = StoryObj<typeof ListBox>;

const args = {
	value: '123',
	items: [
		{
			content: 'lae123',
			value: '123',
		},
		{
			content: 'asdascasc',
			value: '1232',
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
