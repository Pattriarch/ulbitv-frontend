// eslint-disable-next-line ulbitv-fsd/layer-imports-validator
import '@/app/styles/index.scss';
import type { Meta, StoryObj } from '@storybook/react';

import { NotFoundPage } from './NotFoundPage';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

const meta: Meta<typeof NotFoundPage> = {
	title: 'pages/NotFoundPage',
	component: NotFoundPage,
	tags: ['autodocs'],
	decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof NotFoundPage>;

export const Normal: Story = {

};
export const NormalRedesigned: Story = {
	decorators: [NewDesignDecorator],
};
