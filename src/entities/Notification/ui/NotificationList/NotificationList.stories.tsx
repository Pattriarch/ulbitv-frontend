import type { Meta, StoryObj } from '@storybook/react';

import { NotificationList } from './NotificationList';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import mock = jest.mock;
import { NOTIFICATIONS_FIXTURE } from '@/entities/Notification/tests/notificationFixtures';

const meta: Meta<typeof NotificationList> = {
	title: 'entities/Notification/NotificationList',
	component: NotificationList,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NotificationList>;

export const Normal: Story = {
	decorators: [StoreDecorator({})],
	parameters: {
		mockData: [
			{
				url: `${__API__}/notifications`,
				method: 'GET',
				status: 200,
				response: NOTIFICATIONS_FIXTURE,
			},
		],
	},
};
