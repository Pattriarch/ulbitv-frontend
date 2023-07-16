import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotificationList.module.scss';
import { memo } from 'react';
import { useNotifications } from '../../api/notificationApi';
import { VStack } from 'shared/ui/Stack';
import { NotificationItem } from '../../ui/NotificationItem/NotificationItem';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

interface NotificationListProps {
	className?: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
	const { className } = props;
	const { data, isLoading } = useNotifications(null, {
		pollingInterval: 5000
	});

	if (isLoading) {
		return (
			<VStack
				gap={'16'}
				className={classNames(cls.NotificationList, {}, [className])}
			>
				<Skeleton width={'100%'} border={'8px'} height={'80px'} />
				<Skeleton width={'100%'} border={'8px'} height={'80px'} />
				<Skeleton width={'100%'} border={'8px'} height={'80px'} />
			</VStack>
		);
	}

	return (
		<VStack
			gap={'16'}
			className={classNames(cls.NotificationList, {}, [className])}
		>
			{data?.map(item => (
				<NotificationItem key={item.id} item={item} />
			))}
		</VStack>
	);
});
