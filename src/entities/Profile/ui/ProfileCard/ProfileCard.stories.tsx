import type { Meta, StoryObj } from '@storybook/react';

import { ProfileCard } from './ProfileCard';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { PROFILE_STORYBOOK_FIXTURE } from '@/entities/Profile/tests/profileStorybookFixture';

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
				data: PROFILE_STORYBOOK_FIXTURE,
			},
		}),
	],
	args: {
		readonly: true,
		data: PROFILE_STORYBOOK_FIXTURE,
	},
};

export const NormalReadonlyRedesigned: Story = {
	decorators: [
		NewDesignDecorator,
		StoreDecorator({
			profile: {
				data: PROFILE_STORYBOOK_FIXTURE,
			},
		}),
	],
	args: {
		readonly: true,
		data: PROFILE_STORYBOOK_FIXTURE,
	},
};

export const NormalEditable: Story = {
	args: {
		readonly: false,
		data: PROFILE_STORYBOOK_FIXTURE,
	},
};
export const NormalEditableRedesigned: Story = {
	decorators: [NewDesignDecorator],
	args: {
		readonly: false,
		data: PROFILE_STORYBOOK_FIXTURE,
	},
};

export const Loading: Story = {
	args: {
		isLoading: true,
	},
};

export const LoadingRedesigned: Story = {
	decorators: [NewDesignDecorator],
	args: {
		isLoading: true,
	},
};

export const Error: Story = {
	args: {
		error: 'error',
	},
};
export const ErrorRedesigned: Story = {
	decorators: [NewDesignDecorator],
	args: {
		error: 'error',
	},
};
