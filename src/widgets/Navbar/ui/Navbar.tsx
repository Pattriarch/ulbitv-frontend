import React, { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import { useSelector } from 'react-redux';
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'app/config/routeConfig/routes';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';

interface NavbarProps {
	className?: string;
}

export const Navbar = memo(({ className }: NavbarProps): JSX.Element => {
	const { t } = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState(false);
	const authData = useSelector(getUserAuthData);
	const dispatch = useAppDispatch();
	const isAdmin = useSelector(isUserAdmin);
	const isManager = useSelector(isUserManager);

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false);
	}, []);

	const onShowModal = useCallback(() => {
		setIsAuthModal(true);
	}, []);

	const onLogout = useCallback(() => {
		dispatch(userActions.logout());
		setIsAuthModal(false);
	}, [dispatch]);

	const isAdminPanelAvailable = isAdmin || isManager;

	if (authData) {
		return (
			<header className={classNames(cls.Navbar, {}, [className])}>
				<Text
					className={cls.appName}
					title={t('Pattriarch App')}
					theme={TextTheme.INVERTED}
				/>
				<AppLink
					to={RoutePath.article_create}
					theme={AppLinkTheme.SECONDARY}
					className={cls.createBtn}
				>
					{t('Создать статью')}
				</AppLink>
				<Dropdown
					direction={'bottomLeft'}
					className={cls.dropdown}
					items={[
						...(isAdminPanelAvailable
							? [{
								content: t('Админка'),
								href: RoutePath.admin_panel
							}]
							: []),
						{
							content: t('Профиль'),
							href: `${RoutePath.profile}${authData.id as string}`
						},
						{
							content: t('Выйти'),
							onClick: onLogout
						}
					]}
					trigger={
						<Avatar size={30} src={authData.avatar}/>
					}
				/>
			</header>
		);
	}

	return (
		<header className={classNames(cls.Navbar, {}, [className])}>
			<Button
				theme={ButtonTheme.CLEAR_INVERTED}
				type={'button'}
				className={cls.links}
				onClick={onShowModal}
			>
				{t('Войти')}
			</Button>
			{isAuthModal && <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />}
		</header>
	);
});
