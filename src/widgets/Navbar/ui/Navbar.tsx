import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { OpenNotificationListButton } from 'src/features/OpenNotificationListButton';

import { getUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUsername';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import { CreateNewArticleButton } from '@/features/CreateNewArticleButton';
import { getRouteArticleCreate, getRouteMain } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';
import { AppLink, AppLinkTheme } from '@/shared/ui/deprecated/AppLink';
import {
	Button as ButtonDeprecated,
	ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { HStack } from '@/shared/ui/redesigned/Stack';

import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar = memo(({ className }: NavbarProps): JSX.Element => {
	const { t } = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState(false);
	const authData = useSelector(getUserAuthData);

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false);
	}, []);

	const onShowModal = useCallback(() => {
		setIsAuthModal(true);
	}, []);

	if (authData) {
		return (
			<ToggleFeatures
				name={'isAppRedesigned'}
				on={
					<header
						className={classNames(cls.NavbarRedesigned, {}, [
							className,
						])}
					>
						<HStack gap={'16'} className={cls.actions}>
							<CreateNewArticleButton
								className={cls.actionsBtn}
							/>
							<OpenNotificationListButton className={cls.actionsBtn} />
							<AvatarDropdown />
						</HStack>
					</header>
				}
				off={
					<header className={classNames(cls.Navbar, {}, [className])}>
						<AppLink to={getRouteMain()}>
							<Text
								className={cls.appName}
								title={t('Pattriarch App')}
								theme={TextTheme.INVERTED}
							/>
						</AppLink>
						<AppLink
							to={getRouteArticleCreate()}
							theme={AppLinkTheme.SECONDARY}
							className={cls.createBtn}
						>
							{t('Создать статью')}
						</AppLink>
						<HStack gap={'16'} className={cls.actions}>
							<OpenNotificationListButton />
							<AvatarDropdown />
						</HStack>
					</header>
				}
			/>
		);
	}

	const mainClass = toggleFeatures({
		name: 'isAppRedesigned',
		on: () => cls.NavbarRedesigned,
		off: () => cls.Navbar,
	});

	return (
		<header className={classNames(mainClass, {}, [className])}>
			<ToggleFeatures
				name={'isAppRedesigned'}
				on={
					<Button
						variant={'clear'}
						type={'button'}
						className={cls.links}
						onClick={onShowModal}
					>
						{t('Войти')}
					</Button>
				}
				off={
					<ButtonDeprecated
						theme={ButtonTheme.CLEAR_INVERTED}
						type={'button'}
						className={cls.links}
						onClick={onShowModal}
					>
						{t('Войти')}
					</ButtonDeprecated>
				}
			/>
			{isAuthModal && (
				<LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
			)}
		</header>
	);
});
