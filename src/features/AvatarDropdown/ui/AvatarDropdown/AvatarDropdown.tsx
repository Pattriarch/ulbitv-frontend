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

interface AvatarDropdownProps {
	className?: string;
}

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
			content: t('Настройки'),
			href: getRouteSettings(),
		},
		{
			content: t('Профиль'),
			href: getRouteProfile(authData.id),
		},
		{
			content: t('Выйти'),
			onClick: onLogout,
		},
	];

	// todo: floating UI for direction
	return (
		<ToggleFeatures
			name={'isAppRedesigned'}
			on={
				<Dropdown
					direction={'bottomLeft'}
					items={items}
					trigger={<Avatar size={36} src={authData.avatar} />}
					className={classNames('', {}, [className])}
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
