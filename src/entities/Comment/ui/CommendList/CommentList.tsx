import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentList.module.scss';
import { type Comment } from 'entities/Comment';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { CommentCard } from 'entities/Comment/ui/CommentCard/CommentCard';

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

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length
                ? comments.map((comment) => (
                    <CommentCard
                        key={comment.id}
                        isLoading={isLoading}
                        className={cls.comment}
                        comment={comment}
                    />
                ))
	            : <Text text={t('Комментарии отсутствуют')}/>}
        </div>
    );
};
