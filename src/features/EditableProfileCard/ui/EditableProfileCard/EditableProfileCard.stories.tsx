import type { Meta, StoryObj } from '@storybook/react';

import { EditableProfileCard } from './EditableProfileCard';

import { PROFILE_STORYBOOK_FIXTURE } from '@/entities/Profile/testing';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
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
				data: PROFILE_STORYBOOK_FIXTURE,
				readonly: true,
			},
		}),
	],
};

export const NormalRedesigned: Story = {
	decorators: [
		NewDesignDecorator,
		StoreDecorator({
			profile: {
				data: PROFILE_STORYBOOK_FIXTURE,
				readonly: true,
			},
		}),
	],
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
};

export const NormalEditableRedesigned: Story = {
	decorators: [
		NewDesignDecorator,
		StoreDecorator({
			profile: {
				data: PROFILE_STORYBOOK_FIXTURE,
				readonly: false,
			},
		}),
	],
};

export const Loading: Story = {
	decorators: [
		StoreDecorator({
			profile: {
				isLoading: true,
			},
		}),
	],
};

export const LoadingRedesigned: Story = {
	decorators: [
		NewDesignDecorator,
		StoreDecorator({
			profile: {
				isLoading: true,
			},
		}),
	],
};

export const Error: Story = {
	decorators: [
		StoreDecorator({
			profile: {
				error: 'error',
			},
		}),
	],
};

export const ErrorRedesigned: Story = {
	decorators: [
		NewDesignDecorator,
		StoreDecorator({
			profile: {
				error: 'error',
			},
		}),
	],
};
