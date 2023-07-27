import { type Meta, type StoryObj } from '@storybook/react';

import { ThemeSwitcher } from './ThemeSwitcher';

const meta: Meta<typeof ThemeSwitcher> = {
	title: 'features/ThemeSwitcher',
	component: ThemeSwitcher,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const Normal: Story = {
	args: {},
};
