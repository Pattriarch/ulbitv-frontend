import type { Meta, StoryObj } from '@storybook/react';

import { AddArticleForm } from './AddArticleForm';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof AddArticleForm> = {
	title: 'features/AddArticleForm',
	component: AddArticleForm,
	tags: ['autodocs'],
	decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof AddArticleForm>;

export const Normal: Story = {
};

export const NormalRedesigned: Story = {
	decorators: [NewDesignDecorator],
};
