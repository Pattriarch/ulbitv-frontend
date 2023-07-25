import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { type SidebarItemType } from '../../model/types/sidebar';

import { type StateSchema } from '@/app/providers/StoreProvider';
import AboutIcon from '@/shared/assets/icons/about-20-20.svg';
import ArticlesIcon from '@/shared/assets/icons/articles-20-20.svg';
import MainIcon from '@/shared/assets/icons/main-20-20.svg';
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg';
import {
	getRouteArticles,
	getRouteMain,
	getRouteAbout,
	getRouteProfile,
} from '@/shared/const/router';

describe('getSidebarItems', () => {
	test('should return sidebar items', () => {
		const data: SidebarItemType[] = [
			{
				path: getRouteMain(),
				Icon: MainIcon,
				text: 'Главная',
			},
			{
				path: getRouteAbout(),
				Icon: AboutIcon,
				text: 'О сайте',
			},
			{
				path: getRouteProfile('1'),
				Icon: ProfileIcon,
				text: 'Профиль',
				authOnly: true,
			},
			{
				path: getRouteArticles(),
				Icon: ArticlesIcon,
				text: 'Статьи',
				authOnly: true,
			},
		];
		const state: DeepPartial<StateSchema> = {
			user: {
				authData: {
					id: '1',
				},
			},
		};
		expect(getSidebarItems(state as StateSchema)).toEqual(data);
	});
	test('should return sidebar items', () => {
		const data: SidebarItemType[] = [
			{
				path: getRouteMain(),
				Icon: MainIcon,
				text: 'Главная',
			},
			{
				path: getRouteAbout(),
				Icon: AboutIcon,
				text: 'О сайте',
			},
		];
		const state: DeepPartial<StateSchema> = {
			user: {},
		};
		expect(getSidebarItems(state as StateSchema)).toEqual(data);
	});
});
