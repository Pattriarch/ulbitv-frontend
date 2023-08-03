import type { Meta, StoryObj } from '@storybook/react';

import { EditableProfileCard } from './EditableProfileCard';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { PROFILE_STORYBOOK_FIXTURE } from '@/entities/Profile/tests/profileStorybookFixture';

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
				data: PROFILE_STORYBOOK_FIXTURE,
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
				data: PROFILE_STORYBOOK_FIXTURE,
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
