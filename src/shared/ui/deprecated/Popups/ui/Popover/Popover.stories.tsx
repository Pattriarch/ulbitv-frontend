import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../../../Button';

import { Popover } from './Popover';

const meta: Meta<typeof Popover> = {
	title: 'shared/deprecated/PopoverDeprecated',
	component: Popover,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Popover>;

const args = {
	trigger: <Button>Open</Button>,
	children: (
		<div>
			<p>item 1</p>
			<p>item 2</p>
			<p>item 3</p>
		</div>
	),
};

export const Normal: Story = {
	args: {
		...args,
	},
};
