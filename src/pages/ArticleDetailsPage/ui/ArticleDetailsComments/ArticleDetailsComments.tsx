import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, Suspense, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { getArticleDetailsCommentsIsLoading } from '../../model/selectors/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import {
	fetchCommentsByArticleId
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { TextSize, Text } from '@/shared/ui/Text';
import { AddCommentForm } from '@/features/AddCommentForm';
import { CommentList } from '@/entities/Comment';
import { useTranslation } from 'react-i18next';
import { VStack } from '@/shared/ui/Stack';
import { Loader } from '@/shared/ui/Loader';

interface ArticleDetailsCommentsProps {
	className?: string;
	id?: string;
}

export const ArticleDetailsComments = memo((props: ArticleDetailsCommentsProps) => {
	const { className, id } = props;

	const { t } = useTranslation();

	const dispatch = useAppDispatch();
	const comments = useSelector(getArticleComments.selectAll);
	const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading);

	const onSendComment = useCallback((text: string) => {
		void dispatch(addCommentForArticle(text));
	}, [dispatch]);

	useInitialEffect(() => {
		void dispatch(fetchCommentsByArticleId(id));
	});

	return (
		<VStack gap={'16'} max className={classNames('', {}, [className])}>
			<Text
				size={TextSize.L}
				title={t('Комментарии')}
			/>
			 <Suspense fallback={<Loader/>}>
				<AddCommentForm onSendComment={onSendComment}/>
			 </Suspense>
			<CommentList isLoading={commentsIsLoading} comments={comments}/>
		</VStack>
	);
});
