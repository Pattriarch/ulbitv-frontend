import type { Meta, StoryObj } from '@storybook/react';

import { ProfileRating } from './ProfileRating';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ProfileRating> = {
	title: 'features/ProfileRating',
	component: ProfileRating,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProfileRating>;

const state = {
	user: {
		authData: {
			id: '1',
			username: 'test',
		},
	},
};

export const Normal: Story = {
	decorators: [StoreDecorator(state)],
	parameters: {
		mockData: [
			{
				url: `${__API__}/profile-ratings?userId=1`,
				method: 'GET',
				status: 200,
				response: [
					{
						rate: 3,
					},
				],
			},
		],
		args: {
			profileId: '10',
		},
	},
};

export const WithoutRate: Story = {
	decorators: [
		StoreDecorator({
			user: {
				authData: {
					id: '1',
					username: 'test',
				},
			},
		}),
	],
	args: {
		profileId: '10',
	},
	parameters: {
		mockData: [
			{
				url: `${__API__}/profile-ratings?profileId=10&userId=1`,
				method: 'GET',
				status: 200,
				response: [],
			},
		],
	},
};
