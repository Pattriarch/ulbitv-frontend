import type { Meta, StoryObj } from '@storybook/react';

import { NotificationButton } from './NotificationButton';

import { NOTIFICATIONS_FIXTURE } from '@/entities/Notification/testing';
import { USER_FIXTURE } from '@/entities/User/testing';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof NotificationButton> = {
	title: 'features/NotificationButton',
	component: NotificationButton,
	tags: ['autodocs'],
	decorators: [StoreDecorator({
		user: {
			authData: USER_FIXTURE
		}
	})],
	parameters: {
		mockData: [
			{
				url: `${__API__}/notifications?userId=1`,
				method: 'GET',
				status: 200,
				response: NOTIFICATIONS_FIXTURE
			},
		],
	},
};

export default meta;
type Story = StoryObj<typeof NotificationButton>;

export const Normal: Story = {
};

export const NormalRedesigned: Story = {
	decorators: [NewDesignDecorator]
};
