import type { Meta, StoryObj } from '@storybook/react';

import { NOTIFICATION_FIXTURE } from '../../tests/notificationFixtures';

import { NotificationItem } from './NotificationItem';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

const meta: Meta<typeof NotificationItem> = {
	title: 'entities/Notification/NotificationItem',
	component: NotificationItem,
	tags: ['autodocs'],
	args: {
		item: NOTIFICATION_FIXTURE,
	},
};

export default meta;
type Story = StoryObj<typeof NotificationItem>;

export const Normal: Story = {};

export const NormalRedesigned: Story = {
	decorators: [NewDesignDecorator],
};
