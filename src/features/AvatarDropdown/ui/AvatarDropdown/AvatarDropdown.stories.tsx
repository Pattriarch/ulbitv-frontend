import type { Meta, StoryObj } from '@storybook/react';

import { AvatarDropdown } from './AvatarDropdown';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { getStorybookImage } from '@/shared/lib/tests/getStorybookImage/getStorybookImage';

const meta: Meta<typeof AvatarDropdown> = {
	title: 'features/AvatarDropdown',
	component: AvatarDropdown,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AvatarDropdown>;

// todo: поправить направление dropdown после добавления floating ui
export const Normal: Story = {
	decorators: [
		StoreDecorator({
			user: {
				authData: {
					id: '1',
					username: 'test',
					avatar: getStorybookImage(),
				},
			},
		}),
	],
	args: {},
};
