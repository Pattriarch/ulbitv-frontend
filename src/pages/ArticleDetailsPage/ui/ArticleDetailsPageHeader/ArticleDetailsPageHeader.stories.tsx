import type { Meta, StoryObj } from '@storybook/react';

import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';

import { articleStub } from '@/shared/assets/tests/articleStub';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ArticleDetailsPageHeader> = {
	title: 'pages/ArticleDetailsPage/ArticleDetailsPageHeader',
	component: ArticleDetailsPageHeader,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsPageHeader>;

export const Normal: Story = {
	decorators: [StoreDecorator({})],
	args: {},
};

export const Editable: Story = {
	decorators: [
		StoreDecorator({
			articleDetails: {
				data: articleStub,
			},
			user: {
				authData: { id: '1' },
			},
		}),
	],
};
