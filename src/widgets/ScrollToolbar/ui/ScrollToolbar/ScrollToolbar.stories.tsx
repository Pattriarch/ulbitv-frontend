import type { Meta, StoryObj } from '@storybook/react';

import { ScrollToolbar } from './ScrollToolbar';

const meta: Meta<typeof ScrollToolbar> = {
	title: 'shared/ScrollToolbar',
	component: ScrollToolbar,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ScrollToolbar>;

export const Primary: Story = {
	args: {},
};
