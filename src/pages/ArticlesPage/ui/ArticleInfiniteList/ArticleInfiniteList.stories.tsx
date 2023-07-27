import type { Meta, StoryObj } from '@storybook/react';

import { ArticleInfiniteList } from './ArticleInfiniteList';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ArticleInfiniteList> = {
	title: 'pages/ArticlePage/ArticleInfiniteList',
	component: ArticleInfiniteList,
	tags: ['autodocs'],
	decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof ArticleInfiniteList>;

export const Normal: Story = {
	decorators: [
		StoreDecorator({
			user: {
				authData: { id: '1', username: 'test user' },
			},
			articlesPage: {
				// entities: {
				// 	'1': {
				// 		id: '1',
				// 		type: [ArticleType.COMPUTER_SCIENCE],
				// 		title: 'Статья 1',
				// 		subtitle: 'Подзаголовок статьи',
				// 		createdAt: '',
				// 		views: 123,
				// 		img: '',
				// 		user: { id: '1', username: 'test user' },
				// 		blocks: [],
				// 	},
				// 	'2': {
				// 		id: '2',
				// 		type: [ArticleType.COMPUTER_SCIENCE],
				// 		title: 'Статья 1',
				// 		subtitle: 'Подзаголовок статьи',
				// 		createdAt: '',
				// 		views: 123,
				// 		img: '',
				// 		user: { id: '1', username: 'test user' },
				// 		blocks: [],
				// 	},
				// 	'3': {
				// 		id: '3',
				// 		type: [ArticleType.COMPUTER_SCIENCE],
				// 		title: 'Статья 1',
				// 		subtitle: 'Подзаголовок статьи',
				// 		createdAt: '',
				// 		views: 123,
				// 		img: '',
				// 		user: { id: '1', username: 'test user' },
				// 		blocks: [],
				// 	},
				// },
				// ids: ['1', '2', '3'],
			},
		}),
	],
	args: {
		virtualized: false,
	},
};
