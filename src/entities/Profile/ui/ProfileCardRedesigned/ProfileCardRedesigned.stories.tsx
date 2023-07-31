import type { Meta, StoryObj } from '@storybook/react';

import { ProfileCardRedesigned } from './ProfileCardRedesigned';

const meta: Meta<typeof ProfileCardRedesigned> = {
	title: 'shared/ProfileCardRedesigned',
	component: ProfileCardRedesigned,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProfileCardRedesigned>;

export const Primary: Story = {
	args: {},
};
