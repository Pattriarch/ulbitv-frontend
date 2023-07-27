import type { Meta, StoryObj } from '@storybook/react';

import { AddArticleForm } from './AddArticleForm';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof AddArticleForm> = {
	title: 'features/AddArticleForm',
	component: AddArticleForm,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AddArticleForm>;

export const Normal: Story = {
	decorators: [StoreDecorator({})],
	args: {},
};
