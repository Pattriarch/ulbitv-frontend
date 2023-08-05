// eslint-disable-next-line ulbitv-fsd/layer-imports-validator
import '@/app/styles/index.scss';
import type { Meta, StoryObj } from '@storybook/react';

import ProfilePage from './ProfilePage';

import { PROFILE_STORYBOOK_FIXTURE } from '@/entities/Profile';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ProfilePage> = {
	title: 'pages/ProfilePage',
	component: ProfilePage,
	tags: ['autodocs'],
	decorators: [
		StoreDecorator({
			profile: {
				data: PROFILE_STORYBOOK_FIXTURE
			},
		}),
	],
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Normal: Story = {};

export const NormalRedesigned: Story = {
	decorators: [NewDesignDecorator],
};
