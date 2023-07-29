import type { Meta, StoryObj } from '@storybook/react';

import SettingsPage from './SettingsPage';

const meta: Meta<typeof SettingsPage> = {
	title: 'pages/SettingsPage',
	component: SettingsPage,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SettingsPage>;

export const Normal: Story = {
	args: {},
};
