import type { Meta, StoryObj } from '@storybook/react';

import { AppLoaderLayout } from './AppLoaderLayout';

const meta: Meta<typeof AppLoaderLayout> = {
	title: 'shared/layouts/AppLoaderLayout',
	component: AppLoaderLayout,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AppLoaderLayout>;

export const Normal: Story = {};
