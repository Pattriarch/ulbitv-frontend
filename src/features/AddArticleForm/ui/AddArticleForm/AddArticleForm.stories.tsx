import type { Meta, StoryObj } from '@storybook/react';

import { AddArticleForm } from './AddArticleForm';

const meta: Meta<typeof AddArticleForm> = {
    title: 'shared/AddArticleForm',
    component: AddArticleForm,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof AddArticleForm>;

export const Primary: Story = {
    args: {}
};
