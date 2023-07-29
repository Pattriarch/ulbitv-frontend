import React, { memo, useCallback, useState } from 'react';

import { NotificationList } from '@/entities/Notification';
import NotificationIconDeprecated from '@/shared/assets/icons/notification-20-20.svg';
import NotificationIcon from '@/shared/assets/icons/notify-32-32.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import {
	Button as ButtonDeprecated,
	ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Popover } from '@/shared/ui/redesigned/Popups';

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

	return (
		<div>
			{isMobile ? (
				<>
					{trigger}
					<ToggleFeatures
						name={'isAppRedesigned'}
						on={
							<Drawer isOpen={isOpen} onClose={onCloseDrawer}>
								<NotificationList />
							</Drawer>
						}
						off={
							<Drawer isOpen={isOpen} onClose={onCloseDrawer}>
								<NotificationList />
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
							<NotificationList className={cls.notifications} />
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
							<NotificationList className={cls.notifications} />
						</PopoverDeprecated>
					}
				/>
			)}
		</div>
	);
});
