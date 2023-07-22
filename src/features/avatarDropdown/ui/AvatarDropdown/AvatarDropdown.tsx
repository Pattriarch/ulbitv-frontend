import { classNames } from '@/shared/lib/classNames/classNames';
import React, { memo, useCallback } from 'react';
import { Avatar } from '@/shared/ui/Avatar';
import { Dropdown } from '@/shared/ui/Popups';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getRouteAdminPanel, getRouterProfile } from '@/shared/const/router';

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

	return (
		<Dropdown
			direction={'bottomLeft'}
			items={[
				...(isAdminPanelAvailable
					? [{
						content: t('Админка'),
						href: getRouteAdminPanel()
					}]
					: []),
				{
					content: t('Профиль'),
					href: getRouterProfile(authData.id)
				},
				{
					content: t('Выйти'),
					onClick: onLogout
				}
			]}
			trigger={
				<Avatar size={30} src={authData.avatar}/>
			}
			className={classNames('', {}, [className])}
		/>
	);
});
