import type { Meta, StoryObj } from '@storybook/react';
import { NotificationList } from './NotificationList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof NotificationList> = {
	title: 'entities/Notification/NotificationList',
	component: NotificationList,
	tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof NotificationList>;

export const Primary: Story = {
	decorators: [StoreDecorator({})],
	parameters: {
		mockData: [
			{
				url: `${__API__}/notifications`,
				method: 'GET',
				status: 200,
				response: [
					{
						id: '1',
						title: 'Уведомление 1',
						description: 'Текст уведомления'
					},
					{
						id: '2',
						title: 'Уведомление 2',
						description: 'Текст уведомления'
					},
					{
						id: '3',
						title: 'Уведомление 3',
						description: 'Текст уведомления'
					},
					{
						id: '4',
						title: 'Уведомление 4',
						description: 'Текст уведомления'
					}
				]
			}
		]
	}
};
