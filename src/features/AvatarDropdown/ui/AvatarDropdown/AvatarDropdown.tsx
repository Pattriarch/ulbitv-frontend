import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
	getUserAuthData,
	isUserAdmin,
	isUserManager,
	userActions,
} from '@/entities/User';
import {
	getRouteAdminPanel,
	getRouteProfile,
	getRouteSettings,
} from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Dropdown as DropdownDeprecated } from '@/shared/ui/deprecated/Popups';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Dropdown } from '@/shared/ui/redesigned/Popups/ui/Dropdown/Dropdown';

import cls from './AvatarDropdown.module.scss';

interface AvatarDropdownProps {
	/**
	 * Дополнительные стили компонента.
	 */
	className?: string;
}

/**
 * Компонент AvatarDropdown - выпадающее меню с настройками пользователя.
 *
 * @component
 *
 * @param {Object} props - Пропсы компонента.
 * @param {string} props.className - Дополнительные стили компонента.
 * @returns {JSX.Element|null} - Возвращает JSX элемент выпадающего меню с настройками пользователя или null, если нет данных авторизации.
 */
export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
	const { className } = props;
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const authData = useSelector(getUserAuthData);
	const isAdmin = useSelector(isUserAdmin);
	const isManager = useSelector(isUserManager);

	const onLogout = useCallback(() => {
		dispatch(userActions.logout());
	}, [dispatch]);

	const isAdminPanelAvailable = isAdmin || isManager;

	if (!authData) {
		return null;
	}

	const items = [
		...(isAdminPanelAvailable
			? [
					{
						content: t('Админка'),
						href: getRouteAdminPanel(),
					},
			  ]
			: []),
		{
			content: t('Профиль'),
			href: getRouteProfile(authData.id),
		},
		{
			content: t('Настройки'),
			href: getRouteSettings(),
		},
		{
			content: t('Выйти'),
			onClick: onLogout,
		},
	];

	return (
		<ToggleFeatures
			name={'isAppRedesigned'}
			on={
				<Dropdown
					direction={'bottomLeft'}
					items={items}
					trigger={<Avatar size={36} src={authData.avatar} />}
					className={classNames(cls.AvatarDropdown, {}, [className])}
				/>
			}
			off={
				<DropdownDeprecated
					direction={'bottomLeft'}
					items={items}
					trigger={
						<AvatarDeprecated
							fallbackInverted={true}
							size={30}
							src={authData.avatar}
						/>
					}
					className={classNames('', {}, [className])}
				/>
			}
		/>
	);
});
