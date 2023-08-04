// eslint-disable-next-line ulbitv-fsd/layer-imports-validator
import '@/app/styles/index.scss';
import type { Meta, StoryObj } from '@storybook/react';

import MainPage from './MainPage';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof MainPage> = {
	title: 'pages/MainPage',
	component: MainPage,
	tags: ['autodocs'],
	decorators: [StoreDecorator({})],
	args: {
		to: '/',
	},
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Normal: Story = {

};

export const NormalRedesigned: Story = {
	decorators: [NewDesignDecorator],
};
