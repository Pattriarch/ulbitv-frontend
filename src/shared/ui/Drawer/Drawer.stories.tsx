import type { Meta, StoryObj } from '@storybook/react';

import { Drawer } from './Drawer';

const meta: Meta<typeof Drawer> = {
	title: 'shared/Drawer',
	component: Drawer,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Normal: Story = {
	args: {
		children:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolorem doloribus esse harum\n' +
			'iusto, labore maiores necessitatibus nesciunt quasi quos temporibus unde vero voluptatibus. Debitis\n' +
			'explicabo harum id natus nisi quibusdam, tenetur ut. Ad beatae facilis iure odio, sapiente\n' +
			'voluptate?',
		isOpen: true,
	},
};
