import type { Meta, StoryObj } from '@storybook/react';

import { NOTIFICATIONS_FIXTURE } from '../../tests/notificationFixtures';

import { NotificationList } from './NotificationList';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof NotificationList> = {
	title: 'entities/Notification/NotificationList',
	component: NotificationList,
	tags: ['autodocs'],
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

export default meta;
type Story = StoryObj<typeof NotificationList>;

export const Normal: Story = {
};

export const NormalRedesigned: Story = {
	decorators: [NewDesignDecorator],
};
