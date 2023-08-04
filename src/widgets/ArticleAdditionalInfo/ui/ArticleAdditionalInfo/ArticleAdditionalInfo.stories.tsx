import type { Meta, StoryObj } from '@storybook/react';

import { ArticleAdditionalInfo } from './ArticleAdditionalInfo';
import { USER_FIXTURE } from '@/entities/User/testing';

const meta: Meta<typeof ArticleAdditionalInfo> = {
	title: 'widgets/ArticleAdditionalInfo',
	component: ArticleAdditionalInfo,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleAdditionalInfo>;

export const Normal: Story = {
	args: {
		author: USER_FIXTURE,
	},
};
