import type { Meta, StoryObj } from '@storybook/react';
import { NotificationList } from './NotificationList';

const meta: Meta<typeof NotificationList> = {
	title: 'shared/NotificationList',
	component: NotificationList,
	tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof NotificationList>;

export const Primary: Story = {
	args: {}
};
