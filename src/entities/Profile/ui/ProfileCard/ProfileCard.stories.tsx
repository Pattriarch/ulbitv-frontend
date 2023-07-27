import type { Meta, StoryObj } from '@storybook/react';

import { ProfileCard } from './ProfileCard';

import { profileStub } from '@/shared/assets/tests/profileStub';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ProfileCard> = {
	title: 'entities/Profile/ProfileCard',
	component: ProfileCard,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const NormalReadonly: Story = {
	decorators: [
		StoreDecorator({
			profile: {
				data: profileStub,
			},
		}),
	],
	args: {
		readonly: true,
		data: profileStub,
	},
};

export const NormalEditable: Story = {
	args: {
		readonly: false,
		data: profileStub,
	},
};

export const Loading: Story = {
	args: {
		isLoading: true,
	},
};
export const Error: Story = {
	args: {
		error: 'true',
	},
};
