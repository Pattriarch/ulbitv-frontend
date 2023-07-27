import type { Meta, StoryObj } from '@storybook/react';

import { ArticleDetailsComments } from './ArticleDetailsComments';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { getStorybookImage } from '@/shared/lib/tests/getStorybookImage/getStorybookImage';

const meta: Meta<typeof ArticleDetailsComments> = {
	title: 'pages/ArticleDetailsPage/ArticleDetailsComments',
	component: ArticleDetailsComments,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsComments>;

export const Normal: Story = {
	decorators: [
		StoreDecorator({
			articleDetailsPage: {
				comments: {
					entities: {
						'1': {
							user: {
								id: '1',
								username: 'user 1',
								avatar: getStorybookImage(),
							},
							text: 'Comment 1',
						},
						'2': {
							user: {
								id: '2',
								username: 'user 2',
								avatar: getStorybookImage(),
							},
							text: 'Comment 2',
						},
						'3': {
							user: {
								id: '2',
								username: 'user 3',
								avatar: getStorybookImage(),
							},
							text: 'Comment 3',
						},
					},
					ids: ['1', '2', '3'],
				},
			},
		}),
	],
	args: {
		id: '1',
	},
};
