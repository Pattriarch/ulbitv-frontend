// eslint-disable-next-line ulbitv-fsd/layer-imports-validator
import '@/app/styles/index.scss';
import type { Meta, StoryObj } from '@storybook/react';

import AdminPanelPage from './AdminPanelPage';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof AdminPanelPage> = {
	title: 'pages/AdminPanelPage',
	component: AdminPanelPage,
	tags: ['autodocs'],
	decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof AdminPanelPage>;

export const Normal: Story = {
	args: {},
};
