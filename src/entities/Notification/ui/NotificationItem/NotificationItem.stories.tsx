import type { Meta, StoryObj } from '@storybook/react';

import { NotificationItem } from './NotificationItem';
import { NOTIFICATION_FIXTURE } from '@/entities/Notification/tests/notificationFixtures';

const meta: Meta<typeof NotificationItem> = {
	title: 'entities/Notification/NotificationItem',
	component: NotificationItem,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NotificationItem>;

export const Normal: Story = {
	args: {
		item: NOTIFICATION_FIXTURE,
	},
};
