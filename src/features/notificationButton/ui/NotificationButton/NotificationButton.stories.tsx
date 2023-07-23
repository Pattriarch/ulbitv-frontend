import type { Meta, StoryObj } from '@storybook/react';

import { NotificationButton } from './NotificationButton';

const meta: Meta<typeof NotificationButton> = {
	title: 'features/NotificationButton',
	component: NotificationButton,
	tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof NotificationButton>;

export const Primary: Story = {
	args: {}
};
