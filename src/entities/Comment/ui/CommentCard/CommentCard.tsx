import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentCard.module.scss';
import { type Comment } from '../../model/types/comment';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { RoutePath } from 'app/config/routeConfig/routes';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { VStack } from 'shared/ui/Stack';

interface CommentCardProps {
	className?: string;
	isLoading?: boolean;
    comment?: Comment;
}

export const CommentCard = (props: CommentCardProps): JSX.Element | null => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <VStack gap={'8'} max className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border={'50%'} />
                    <Skeleton width={100} height={16} className={cls.username}/>
                </div>
                <Skeleton width={'100%'} height={50} className={cls.text}/>
            </VStack>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <VStack gap={'8'} max className={classNames(cls.CommentCard, {}, [className])}>
            {/* eslint-disable-next-line @typescript-eslint/restrict-plus-operands */}
            <AppLink to={RoutePath.profile + comment.user?.id} className={cls.header}>
                {comment.user?.avatar ? <Avatar src={comment.user?.avatar} size={30}/> : null}
                <Text className={cls.username} title={comment.user?.username}/>
            </AppLink>
            <Text className={cls.text} text={comment.text}/>
        </VStack>
    );
};
