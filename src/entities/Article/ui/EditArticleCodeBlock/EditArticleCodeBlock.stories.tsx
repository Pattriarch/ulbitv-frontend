import type { Meta, StoryObj } from '@storybook/react';

import { EditArticleCodeBlock } from './EditArticleCodeBlock';

const meta: Meta<typeof EditArticleCodeBlock> = {
	title: 'shared/EditArticleCodeBlock',
	component: EditArticleCodeBlock,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EditArticleCodeBlock>;

export const Primary: Story = {
	args: {},
};
