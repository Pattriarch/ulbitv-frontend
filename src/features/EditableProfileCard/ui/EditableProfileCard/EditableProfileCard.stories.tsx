import type { Meta, StoryObj } from '@storybook/react';

import { EditableProfileCard } from './EditableProfileCard';

import { profileStub } from '@/shared/assets/tests/profileStub';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof EditableProfileCard> = {
	title: 'features/EditableProfileCard/EditableProfileCard',
	component: EditableProfileCard,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EditableProfileCard>;

export const Normal: Story = {
	decorators: [
		StoreDecorator({
			profile: {
				data: profileStub,
				readonly: true,
			},
		}),
	],
	args: {},
};

export const NormalEditable: Story = {
	decorators: [
		StoreDecorator({
			profile: {
				data: profileStub,
				readonly: false,
			},
		}),
	],
	args: {},
};

export const Loading: Story = {
	decorators: [
		StoreDecorator({
			profile: {
				isLoading: true,
			},
		}),
	],
	args: {},
};

export const Error: Story = {
	decorators: [
		StoreDecorator({
			profile: {
				error: 'error',
			},
		}),
	],
	args: {},
};
