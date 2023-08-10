import {
	ArticleSortField,
	ArticleType,
	ArticleView,
} from '../consts/articleConsts';

import { getStorybookImage } from '@/shared/lib/tests/getStorybookImage/getStorybookImage';

export const ARTICLE_LIST_FIXTURE = {
	page: 2,
	entities: {
		'1': {
			id: '1',
			type: [ArticleType.COMPUTER_SCIENCE],
			title: 'Статья 1',
			subtitle: 'Подзаголовок статьи',
			createdAt: '',
			views: 123,
			img: getStorybookImage(),
			user: { id: '1', username: 'test user' },
			blocks: [],
		},
		'2': {
			id: '2',
			type: [ArticleType.COMPUTER_SCIENCE],
			title: 'Статья 1',
			subtitle: 'Подзаголовок статьи',
			createdAt: '',
			views: 123,
			img: getStorybookImage(),
			user: { id: '1', username: 'test user' },
			blocks: [],
		},
		'3': {
			id: '3',
			type: [ArticleType.COMPUTER_SCIENCE],
			title: 'Статья 1',
			subtitle: 'Подзаголовок статьи',
			createdAt: '',
			views: 123,
			img: getStorybookImage(),
			user: { id: '1', username: 'test user' },
			blocks: [],
		},
	},
	ids: ['1', '2', '3'],
	limit: 5,
	isLoading: false,
	hasMore: true,
	_inited: false,
	view: ArticleView.BIG,
	order: 'asc' as const,
	search: '',
	sort: ArticleSortField.CREATED,
	type: ArticleType.ALL,
};
