import type { Meta, StoryObj } from '@storybook/react';

import { MainLayout } from './MainLayout';

const meta: Meta<typeof MainLayout> = {
	title: 'shared/layouts/MainLayout',
	component: MainLayout,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MainLayout>;

export const Normal: Story = {};
