import type { Meta, StoryObj } from '@storybook/react';
import { EditArticleForm } from './EditArticleForm';

const meta: Meta<typeof EditArticleForm> = {
    title: 'shared/EditArticleForm',
    component: EditArticleForm,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof EditArticleForm>;

export const Primary: Story = {
    args: {}
};
