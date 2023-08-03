import { Theme } from '@/shared/const/theme';

export const USER_FIXTURE_ID = '1';
export const USER_FIXTURE_THEME = Theme.TAN;

export const USER_FIXTURE = {
	id: USER_FIXTURE_ID,
	username: 'test',
	jsonSettings: {
		theme: USER_FIXTURE_THEME,
		isFirstVisit: true,
		isArticlesPageWasOpened: false,
	},
	features: {
		isAppRedesigned: true,
	},
};
