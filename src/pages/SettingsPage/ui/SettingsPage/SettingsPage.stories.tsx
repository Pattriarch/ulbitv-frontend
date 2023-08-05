import type { Meta, StoryObj } from '@storybook/react';

import SettingsPage from './SettingsPage';

import { USER_FIXTURE } from '@/entities/User/testing';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof SettingsPage> = {
	title: 'pages/SettingsPage',
	component: SettingsPage,
	tags: ['autodocs'],
	decorators: [StoreDecorator({
		user: {
			authData: USER_FIXTURE,
		},
	})],
};

export default meta;
type Story = StoryObj<typeof SettingsPage>;

export const Normal: Story = {};

export const NormalRedesigned: Story = {
	decorators: [NewDesignDecorator],
};
