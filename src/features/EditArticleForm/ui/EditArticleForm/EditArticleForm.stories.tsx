import type { Meta, StoryObj } from '@storybook/react';

import { EditArticleForm } from './EditArticleForm';

import { ARTICLE_STORYBOOK_FIXTURE } from '@/entities/Article/testing';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof EditArticleForm> = {
	title: 'features/EditArticleForm',
	component: EditArticleForm,
	tags: ['autodocs'],
	decorators: [StoreDecorator({
		editArticleForm: {
			form: ARTICLE_STORYBOOK_FIXTURE
		}
	})],
};

export default meta;
type Story = StoryObj<typeof EditArticleForm>;

export const Normal: Story = {};

export const NormalRedesigned: Story = {
	decorators: [NewDesignDecorator],
};
