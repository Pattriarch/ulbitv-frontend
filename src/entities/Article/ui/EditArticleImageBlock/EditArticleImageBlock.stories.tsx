import type { Meta, StoryObj } from '@storybook/react';

import { EditArticleImageBlock } from './EditArticleImageBlock';

const meta: Meta<typeof EditArticleImageBlock> = {
    title: 'shared/EditArticleImageBlock',
    component: EditArticleImageBlock,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof EditArticleImageBlock>;

export const Primary: Story = {
    args: {}
};
