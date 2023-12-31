import { useSelector } from 'react-redux';

import { type SidebarItemType } from '../types/sidebar';

import { getUserAuthData } from '@/entities/User';
import AboutIconDeprecated from '@/shared/assets/icons/about-20-20.svg';
import ArticlesIconDeprecated from '@/shared/assets/icons/articles-20-20.svg';
import ArticlesIcon from '@/shared/assets/icons/articles-32-32.svg';
import ProfileIcon from '@/shared/assets/icons/avatar-32-32.svg';
import MainIcon from '@/shared/assets/icons/home-32-32.svg';
import AboutIcon from '@/shared/assets/icons/info-32-32.svg';
import MainIconDeprecated from '@/shared/assets/icons/main-20-20.svg';
import ProfileIconDeprecated from '@/shared/assets/icons/profile-20-20.svg';
import {
	getRouteArticles,
	getRouteMain,
	getRouteAbout,
	getRouteProfile,
} from '@/shared/const/router';
import { toggleFeatures } from '@/shared/lib/features';

export const useSidebarItems = () => {
	const userData = useSelector(getUserAuthData);
	const sidebarItemsList: SidebarItemType[] = [
		{
			path: getRouteMain(),
			Icon: toggleFeatures({
				name: 'isAppRedesigned',
				off: () => MainIconDeprecated,
				on: () => MainIcon,
			}),
			text: 'Главная',
		},
		{
			path: getRouteAbout(),
			Icon: toggleFeatures({
				name: 'isAppRedesigned',
				off: () => AboutIconDeprecated,
				on: () => AboutIcon,
			}),
			text: 'О сайте',
		},
	];

	if (userData) {
		sidebarItemsList.push(
			{
				path: getRouteProfile(userData.id),
				Icon: toggleFeatures({
					name: 'isAppRedesigned',
					off: () => ProfileIconDeprecated,
					on: () => ProfileIcon,
				}),
				text: 'Профиль',
				authOnly: true,
			},
			{
				path: getRouteArticles(),
				Icon: toggleFeatures({
					name: 'isAppRedesigned',
					off: () => ArticlesIconDeprecated,
					on: () => ArticlesIcon,
				}),
				text: 'Статьи',
				authOnly: true,
			},
		);
	}

	return sidebarItemsList;
};
