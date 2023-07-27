import React, { memo, useCallback, useState } from 'react';

import { NotificationList } from '@/entities/Notification';
import NotificationIcon from '@/shared/assets/icons/notification-20-20.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Drawer } from '@/shared/ui/Drawer';
import { Icon } from '@/shared/ui/Icon';
import { Popover } from '@/shared/ui/Popups';

import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
	className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
	const { className } = props;
	const isMobile = useDevice();

	const [isOpen, setIsOpen] = useState(false);

	const onCloseDrawer = useCallback(() => {
		setIsOpen(false);
	}, []);

	const onOpenDrawer = useCallback(() => {
		setIsOpen(true);
	}, []);

	const trigger = (
		<Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
			<Icon Svg={NotificationIcon} inverted />
		</Button>
	);

	return (
		<div>
			{isMobile ? (
				<>
					{trigger}
					<Drawer isOpen={isOpen} onClose={onCloseDrawer}>
						<NotificationList />
					</Drawer>
				</>
			) : (
				<Popover
					direction={'bottomLeft'}
					trigger={trigger}
					className={classNames(cls.NotificationButton, {}, [
						className,
					])}
				>
					<NotificationList className={cls.notifications} />
				</Popover>
			)}
		</div>
	);
});
