import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolorem doloribus esse harum\n' +
			'iusto, labore maiores necessitatibus nesciunt quasi quos temporibus unde vero voluptatibus. Debitis\n' +
			'explicabo harum id natus nisi quibusdam, tenetur ut. Ad beatae facilis iure odio, sapiente\n' +
			'voluptate?'
    }
};

export const PrimaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolorem doloribus esse harum\n' +
			'iusto, labore maiores necessitatibus nesciunt quasi quos temporibus unde vero voluptatibus. Debitis\n' +
			'explicabo harum id natus nisi quibusdam, tenetur ut. Ad beatae facilis iure odio, sapiente\n' +
			'voluptate?'
    }
};
