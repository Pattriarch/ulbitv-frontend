import React, { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';

import { NotificationList } from '@/entities/Notification';
import { getUserAuthData } from '@/entities/User';
import NotificationIconDeprecated from '@/shared/assets/icons/notification-20-20.svg';
import NotificationIcon from '@/shared/assets/icons/notify-32-32.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import {
	Button as ButtonDeprecated,
	ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Popover } from '@/shared/ui/redesigned/Popups';

import cls from './OpenNotificationListButton.module.scss';

interface NotificationButtonProps {
	className?: string;
}

export const OpenNotificationListButton = memo((props: NotificationButtonProps) => {
	const { className } = props;
	const isMobile = useDevice();
	const userData = useSelector(getUserAuthData);

	const [isOpen, setIsOpen] = useState(false);

	const onCloseDrawer = useCallback(() => {
		setIsOpen(false);
	}, []);

	const onOpenDrawer = useCallback(() => {
		setIsOpen(true);
	}, []);

	const trigger = (
		<ToggleFeatures
			name={'isAppRedesigned'}
			on={
				<Icon Svg={NotificationIcon} clickable onClick={onOpenDrawer} />
			}
			off={
				<ButtonDeprecated
					onClick={onOpenDrawer}
					theme={ButtonTheme.CLEAR}
				>
					<IconDeprecated Svg={NotificationIconDeprecated} inverted />
				</ButtonDeprecated>
			}
		/>
	);

	if (!userData) {
		return null;
	}

	return (
		<div>
			{isMobile ? (
				<>
					{trigger}
					<ToggleFeatures
						name={'isAppRedesigned'}
						on={
							<Drawer isOpen={isOpen} onClose={onCloseDrawer}>
								<NotificationList userId={+userData.id} />
							</Drawer>
						}
						off={
							<Drawer isOpen={isOpen} onClose={onCloseDrawer}>
								<NotificationList userId={+userData.id} />
							</Drawer>
						}
					/>
				</>
			) : (
				<ToggleFeatures
					name={'isAppRedesigned'}
					on={
						<Popover
							direction={'bottomLeft'}
							trigger={trigger}
							className={classNames(cls.NotificationButton, {}, [
								className,
							])}
						>
							<NotificationList
								userId={+userData.id}
								className={cls.notifications}
							/>
						</Popover>
					}
					off={
						<PopoverDeprecated
							direction={'bottomLeft'}
							trigger={trigger}
							className={classNames(cls.NotificationButton, {}, [
								className,
							])}
						>
							<NotificationList
								userId={+userData.id}
								className={cls.notifications}
							/>
						</PopoverDeprecated>
					}
				/>
			)}
		</div>
	);
});
