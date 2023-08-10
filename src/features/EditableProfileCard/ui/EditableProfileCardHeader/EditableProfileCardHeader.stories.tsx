import type { Meta, StoryObj } from '@storybook/react';

import { EditableProfileCardHeader } from './EditableProfileCardHeader';

import { USER_FIXTURE } from '@/entities/User/testing';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof EditableProfileCardHeader> = {
	title: 'features/EditableProfileCard/EditableProfileCardHeader',
	component: EditableProfileCardHeader,
	tags: ['autodocs'],
	decorators: [
		StoreDecorator({
			user: {
				authData: USER_FIXTURE,
			},
			profile: {
				data: {
					id: '1',
				},
				readonly: false,
			},
		}),
	],
};

export default meta;
type Story = StoryObj<typeof EditableProfileCardHeader>;

export const Normal: Story = {};

export const NormalRedesigned: Story = {
	decorators: [NewDesignDecorator],
};
