import type { Meta, StoryObj } from '@storybook/react';

import { CreateNewArticleButton } from './CreateNewArticleButton';

const meta: Meta<typeof CreateNewArticleButton> = {
	title: 'features/CreateNewArticleButton',
	component: CreateNewArticleButton,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CreateNewArticleButton>;

export const Normal: Story = {};
