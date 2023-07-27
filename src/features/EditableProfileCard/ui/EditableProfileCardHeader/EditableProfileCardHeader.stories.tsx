import type { Meta, StoryObj } from '@storybook/react';

import { EditableProfileCardHeader } from './EditableProfileCardHeader';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof EditableProfileCardHeader> = {
	title: 'features/EditableProfileCard/EditableProfileCardHeader',
	component: EditableProfileCardHeader,
	tags: ['autodocs'],
	decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof EditableProfileCardHeader>;

const state = {
	user: {
		authData: {
			id: '1',
			username: 'test',
		},
	},
	profile: {
		data: {
			id: '1',
		},
		readonly: true,
	},
};

export const Normal: Story = {
	decorators: [StoreDecorator(state)],
	args: {},
};

export const NormalEditable: Story = {
	decorators: [StoreDecorator(state)],
	args: {},
};
