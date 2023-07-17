import type { Meta, StoryObj } from '@storybook/react';
import { EditArticleForm } from './EditArticleForm';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof EditArticleForm> = {
    title: 'shared/EditArticleForm',
    component: EditArticleForm,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})]
};

export default meta;
type Story = StoryObj<typeof EditArticleForm>;

export const Primary: Story = {
    args: {}
};
