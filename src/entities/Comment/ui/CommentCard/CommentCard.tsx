import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { Text } from '@/shared/ui/deprecated/Text';

import { type Comment } from '../../model/types/comment';

import { getRouteProfile } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './CommentCard.module.scss';

interface CommentCardProps {
	className?: string;
	isLoading?: boolean;
	comment?: Comment;
}

export const CommentCard = (props: CommentCardProps): JSX.Element | null => {
	const { className, comment, isLoading } = props;

	if (isLoading) {
		return (
			<VStack
				data-testid={'CommentCard.Loading'}
				gap={'8'}
				max
				className={classNames(cls.CommentCard, {}, [
					className,
					cls.loading,
				])}
			>
				<div className={cls.header}>
					<Skeleton width={30} height={30} border={'50%'} />
					<Skeleton
						width={100}
						height={16}
						className={cls.username}
					/>
				</div>
				<Skeleton width={'100%'} height={50} className={cls.text} />
			</VStack>
		);
	}

	if (!comment) {
		return null;
	}

	return (
		<VStack
			data-testid={'CommentCard.Content'}
			gap={'8'}
			max
			className={classNames(cls.CommentCard, {}, [className])}
		>
			<AppLink
				to={getRouteProfile(comment.user?.id)}
				className={cls.header}
			>
				{comment.user?.avatar ? (
					<Avatar src={comment.user?.avatar} size={30} />
				) : null}
				<Text className={cls.username} title={comment.user?.username} />
			</AppLink>
			<Text className={cls.text} text={comment.text} />
		</VStack>
	);
};
