import { useTranslation } from 'react-i18next';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { Text } from '@/shared/ui/deprecated/Text';

import { type Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';

import { classNames } from '@/shared/lib/classNames/classNames';

interface CommentListProps {
	className?: string;
	comments?: Comment[];
	isLoading?: boolean;
}

export const CommentList = (props: CommentListProps): JSX.Element => {
	const { className, comments, isLoading } = props;
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
			{comments?.length ? (
				comments.map((comment) => (
					<CommentCard
						key={comment.id}
						isLoading={isLoading}
						comment={comment}
					/>
				))
			) : (
				<Text text={t('Комментарии отсутствуют')} />
			)}
		</VStack>
	);
};
