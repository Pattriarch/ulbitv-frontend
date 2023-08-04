import type { Meta, StoryObj } from '@storybook/react';

import { AvatarDropdown } from './AvatarDropdown';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { getStorybookImage } from '@/shared/lib/tests/getStorybookImage/getStorybookImage';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

const meta: Meta<typeof AvatarDropdown> = {
	title: 'features/AvatarDropdown',
	component: AvatarDropdown,
	tags: ['autodocs'],
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
};

export default meta;
type Story = StoryObj<typeof AvatarDropdown>;

export const Normal: Story = {
};

export const NormalRedesigned: Story = {
	decorators: [NewDesignDecorator]
};


