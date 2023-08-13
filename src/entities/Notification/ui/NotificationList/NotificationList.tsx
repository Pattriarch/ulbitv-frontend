import { memo } from 'react';

import { useNotifications } from '../../api/notificationApi';
import { NotificationItem } from '../../ui/NotificationItem/NotificationItem';

import { classNames } from '@/shared/lib/classNames/classNames';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { VStack } from '@/shared/ui/redesigned/Stack';

interface NotificationListProps {
	/**
	 * Дополнительные стили компонента.
	 */
	className?: string;

	/**
	 * Идентификатор пользователя, для которого отображается список уведомлений.
	 */
	userId: number;
}

/**
 * Компонент списка уведомлений.
 *
 * @component
 * @param {NotificationListProps} props - Пропсы компонента `NotificationList`.
 * @returns {JSX.Element} Список уведомлений.
 */
export const NotificationList = memo((props: NotificationListProps) => {
	const { className, userId } = props;

	const { data, isLoading } = useNotifications(userId, {
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
