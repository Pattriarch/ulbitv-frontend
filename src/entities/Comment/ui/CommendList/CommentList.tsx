import { classNames } from '@/shared/lib/classNames/classNames';
import { type Comment } from '../../model/types/comment';
import { useTranslation } from 'react-i18next';
import { Text } from '@/shared/ui/Text';
import { CommentCard } from '../CommentCard/CommentCard';
import { VStack } from '@/shared/ui/Stack';

interface CommentListProps {
	className?: string;
	comments?: Comment[];
	isLoading?: boolean;
}

export const CommentList = (props: CommentListProps): JSX.Element => {
    const {
        className,
        comments,
        isLoading
    } = props;
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <VStack gap={'16'} max className={classNames('', {}, [className])}>
                <CommentCard isLoading={true} />
                <CommentCard isLoading={true} />
                <CommentCard isLoading={true} />
            </VStack>
        );
    }

    return (
        <VStack gap={'16'} max className={classNames('', {}, [className])}>
            {comments?.length
                ? comments.map((comment) => (
                    <CommentCard
                        key={comment.id}
                        isLoading={isLoading}
                        comment={comment}
                    />
                ))
	            : <Text text={t('Комментарии отсутствуют')}/>}
        </VStack>
    );
};
