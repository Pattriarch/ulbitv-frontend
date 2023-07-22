import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import MainIcon from '@/shared/assets/icons/main-20-20.svg';
import AboutIcon from '@/shared/assets/icons/about-20-20.svg';
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg';
import ArticlesIcon from '@/shared/assets/icons/articles-20-20.svg';

import { type SidebarItemType } from '../../model/types/sidebar';
import { getRouteArticles, getRouteMain, getRouterAbout, getRouterProfile } from '@/shared/const/router';

export const getSidebarItems = createSelector(
	getUserAuthData,
	(userData) => {
		const sidebarItemsList: SidebarItemType[] = [
			{
				path: getRouteMain(),
				Icon: MainIcon,
				text: 'Главная'
			},
			{
				path: getRouterAbout(),
				Icon: AboutIcon,
				text: 'О сайте'
			}
		];

		if (userData) {
			sidebarItemsList.push(
				{
					path: getRouterProfile(userData.id),
					Icon: ProfileIcon,
					text: 'Профиль',
					authOnly: true
				},
				{
					path: getRouteArticles(),
					Icon: ArticlesIcon,
					text: 'Статьи',
					authOnly: true
				}
			);
		}

		return sidebarItemsList;
	}
);
