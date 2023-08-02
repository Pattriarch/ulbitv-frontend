import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { type SidebarItemType } from '../../model/types/sidebar';

import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import {
	AppLink as ApplinkDeprecated,
	AppLinkTheme,
} from '@/shared/ui/deprecated/AppLink';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';

import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
	item: SidebarItemType;
	collapsed: boolean;
}

export const SidebarItem = memo(
	({ item, collapsed }: SidebarItemProps): JSX.Element | null => {
		const { t } = useTranslation();
		const isAuth = useSelector(getUserAuthData);

		if (item.authOnly && !isAuth) {
			return null;
		}

		return (
			<ToggleFeatures
				name={'isAppRedesigned'}
				on={
					<AppLink
						className={classNames(cls.itemRedesigned, {
							[cls.collapsedRedesigned]: collapsed,
						})}
						variant={'primary'}
						to={item.path}
						activeClassName={cls.active}
					>
						<Icon Svg={item.Icon} />
						<span className={cls.link}>{t(item.text)}</span>
					</AppLink>
				}
				off={
					<ApplinkDeprecated
						className={classNames(cls.item, {
							[cls.collapsed]: collapsed,
						})}
						theme={AppLinkTheme.SECONDARY}
						to={item.path}
					>
						<IconDeprecated Svg={item.Icon} className={cls.icon} />
						{/*<item.Icon className={cls.icon} />*/}
						<span className={cls.link}>{t(item.text)}</span>
					</ApplinkDeprecated>
				}
			/>
		);
	},
);
