import type { Meta, StoryObj } from '@storybook/react';

import { EditArticleBlock } from './EditArticleBlock';

const meta: Meta<typeof EditArticleBlock> = {
    title: 'shared/EditArticleBlock',
    component: EditArticleBlock,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof EditArticleBlock>;

export const Primary: Story = {
    args: {}
};
