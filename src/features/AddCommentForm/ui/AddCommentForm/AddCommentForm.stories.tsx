import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import AddCommentForm from './AddCommentForm';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof AddCommentForm> = {
	title: 'features/AddCommentForm',
	component: AddCommentForm,
	tags: ['autodocs'],
	decorators: [StoreDecorator({})],
	args: {
		onSendComment: action('onSendComment'),
	},
};

export default meta;
type Story = StoryObj<typeof AddCommentForm>;

export const Normal: Story = {};

export const NormalRedesigned: Story = {
	decorators: [NewDesignDecorator],
};
