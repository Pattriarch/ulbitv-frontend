import { memo } from 'react';

import { type Notification } from '../../model/types/notification';

import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink';
import { Card, CardTheme } from '@/shared/ui/Card';
import { Text } from '@/shared/ui/Text';

import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
	className?: string;
	item: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
	const { className, item } = props;

	const content = (
		<Card
			theme={CardTheme.OUTLINED}
			className={classNames(cls.NotificationItem, {}, [className])}
		>
			<Text title={item.title} text={item.description}/>
		</Card>
	);

	if (item.href) {
		return (
			<AppLink to={item.href} className={cls.link}>
				{content}
			</AppLink>
		);
	}

	return content;
});
