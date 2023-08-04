import { getStorybookImage } from '@/shared/lib/tests/getStorybookImage/getStorybookImage';

export const ARTICLE_DETAILS_COMMENTS = {
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
};
