import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { type SidebarItemType } from '../../model/types/sidebar';

import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import {
	AppLink as AppLinkDeprecated,
	AppLinkTheme,
} from '@/shared/ui/deprecated/AppLink';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Icon } from '@/shared/ui/redesigned/Icon';

import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
	/**
	 * Элемент боковой панели.
	 */
	item: SidebarItemType;

	/**
	 * Флаг, указывающий, свернут ли элемент боковой панели.
	 */
	collapsed: boolean;
}

/**
 * Компонент SidebarItem представляет элемент боковой панели.
 *
 * @component
 * @param {SidebarItemProps} props - Свойства компонента.
 * @returns {JSX.Element | null} Компонент SidebarItem или null, если элемент не должен отображаться.
 */
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
						{/* i18next-extract-disable-next-line */}
						<span className={cls.link}>{t(item.text)}</span>
					</AppLink>
				}
				off={
					<AppLinkDeprecated
						className={classNames(cls.item, {
							[cls.collapsed]: collapsed,
						})}
						theme={AppLinkTheme.SECONDARY}
						to={item.path}
					>
						<IconDeprecated Svg={item.Icon} className={cls.icon} />
						{/* i18next-extract-disable-next-line */}
						<span className={cls.link}>{t(item.text)}</span>
					</AppLinkDeprecated>
				}
			/>
		);
	},
);
