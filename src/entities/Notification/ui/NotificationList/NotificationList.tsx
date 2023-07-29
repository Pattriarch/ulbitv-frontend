import { memo } from 'react';

import { useNotifications } from '../../api/notificationApi';
import { NotificationItem } from '../../ui/NotificationItem/NotificationItem';

import { classNames } from '@/shared/lib/classNames/classNames';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { VStack } from '@/shared/ui/redesigned/Stack';

interface NotificationListProps {
	className?: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
	const { className } = props;
	const { data, isLoading } = useNotifications(null, {
		pollingInterval: 5000,
	});

	const Skeleton = toggleFeatures({
		name: 'isAppRedesigned',
		on: () => SkeletonRedesigned,
		off: () => SkeletonDeprecated,
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
