import { createSelector } from '@reduxjs/toolkit';

import { type SidebarItemType } from '../../model/types/sidebar';

import { getUserAuthData } from '@/entities/User';
import AboutIcon from '@/shared/assets/icons/about-20-20.svg';
import ArticlesIcon from '@/shared/assets/icons/articles-20-20.svg';
import MainIcon from '@/shared/assets/icons/main-20-20.svg';
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg';
import { getRouteArticles, getRouteMain, getRouteAbout, getRouteProfile } from '@/shared/const/router';

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
				path: getRouteAbout(),
				Icon: AboutIcon,
				text: 'О сайте'
			}
		];

		if (userData) {
			sidebarItemsList.push(
				{
					path: getRouteProfile(userData.id),
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
