import { memo } from 'react';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { VStack } from '@/shared/ui/redesigned/Stack';

import { useNotifications } from '../../api/notificationApi';
import { NotificationItem } from '../../ui/NotificationItem/NotificationItem';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';

interface NotificationListProps {
	className?: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
	const { className } = props;
	const { data, isLoading } = useNotifications(null, {
		pollingInterval: 5000,
	});

	if (isLoading) {
		return (
			<ToggleFeatures
				name={'isAppRedesigned'}
				on={
					<VStack
						gap={'16'}
						className={classNames('', {}, [className])}
					>
						<Skeleton
							width={'100%'}
							border={'8px'}
							height={'80px'}
						/>
						<Skeleton
							width={'100%'}
							border={'8px'}
							height={'80px'}
						/>
						<Skeleton
							width={'100%'}
							border={'8px'}
							height={'80px'}
						/>
					</VStack>
				}
				off={
					<VStack
						gap={'16'}
						className={classNames('', {}, [className])}
					>
						<Skeleton
							width={'100%'}
							border={'8px'}
							height={'80px'}
						/>
						<Skeleton
							width={'100%'}
							border={'8px'}
							height={'80px'}
						/>
						<Skeleton
							width={'100%'}
							border={'8px'}
							height={'80px'}
						/>
					</VStack>
				}
			/>
		);
	}

	return (
		<VStack gap={'16'} className={classNames('', {}, [className])}>
			{data?.map((item) => (
				<NotificationItem key={item.id} item={item} />
			))}
		</VStack>
	);
});
