import { memo } from 'react';

import { type Notification } from '../../model/types/notification';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';
import { Card as CardDeprecated, CardTheme } from '@/shared/ui/deprecated/Card';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Card } from '@/shared/ui/redesigned/Card';
import { Text } from '@/shared/ui/redesigned/Text';

import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
	className?: string;
	item: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
	const { className, item } = props;

	const content = (
		<ToggleFeatures
			name={'isAppRedesigned'}
			on={
				<Card
					className={classNames(cls.NotificationItem, {}, [
						className,
					])}
				>
					<Text title={item.title} text={item.description} />
				</Card>
			}
			off={
				<CardDeprecated
					theme={CardTheme.OUTLINED}
					className={classNames(cls.NotificationItem, {}, [
						className,
					])}
				>
					<TextDeprecated
						title={item.title}
						text={item.description}
					/>
				</CardDeprecated>
			}
		/>
	);

	if (item.href) {
		return (
			<ToggleFeatures
				name={'isAppRedesigned'}
				on={
					<AppLink to={item.href} className={cls.link}>
						{content}
					</AppLink>
				}
				off={
					<AppLinkDeprecated to={item.href} className={cls.link}>
						{content}
					</AppLinkDeprecated>
				}
			/>
		);
	}

	return content;
});
