import type { Meta, StoryObj } from '@storybook/react';

import { ProfileRating } from './ProfileRating';

import { USER_FIXTURE } from '@/entities/User/testing';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ProfileRating> = {
	title: 'features/ProfileRating',
	component: ProfileRating,
	tags: ['autodocs'],
	decorators: [
		StoreDecorator({
			user: {
				authData: USER_FIXTURE,
			},
		}),
	],
};

export default meta;
type Story = StoryObj<typeof ProfileRating>;

const successMockData = [
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
];

const errorMockData = [
	{
		url: `${__API__}/profile-ratings?profileId=10&userId=1`,
		method: 'GET',
		status: 404,
		response: [],
	},
];

export const Normal: Story = {
	parameters: {
		mockData: successMockData,
	},
};

export const NormalRedesigned: Story = {
	decorators: [NewDesignDecorator],
	parameters: {
		mockData: successMockData,
	},
};

export const WithoutRate: Story = {
	parameters: {
		mockData: errorMockData,
	},
};

export const WithoutRateRedesigned: Story = {
	decorators: [NewDesignDecorator],
	parameters: {
		mockData: errorMockData,
	},
};
