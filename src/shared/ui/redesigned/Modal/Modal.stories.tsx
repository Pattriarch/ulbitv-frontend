import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
	title: 'shared/redesigned/Modal',
	component: Modal,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Normal: Story = {
	args: {
		isOpen: true,
		children:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolorem doloribus esse harum\n' +
			'iusto, labore maiores necessitatibus nesciunt quasi quos temporibus unde vero voluptatibus. Debitis\n' +
			'explicabo harum id natus nisi quibusdam, tenetur ut. Ad beatae facilis iure odio, sapiente\n' +
			'voluptate?',
	},
};
