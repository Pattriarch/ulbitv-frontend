import { memo, Suspense, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getArticleDetailsCommentsIsLoading } from '../../model/selectors/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';

import { CommentList } from '@/entities/Comment';
import { AddCommentForm } from '@/features/AddCommentForm';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Loader } from '@/shared/ui/deprecated/Loader';
import { TextSize, Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleDetailsCommentsProps {
	className?: string;
	id?: string;
}

export const ArticleDetailsComments = memo(
	(props: ArticleDetailsCommentsProps) => {
		const { className, id } = props;

		const { t } = useTranslation();
		const dispatch = useAppDispatch();
		const comments = useSelector(getArticleComments.selectAll);
		const commentsIsLoading = useSelector(
			getArticleDetailsCommentsIsLoading,
		);

		const onSendComment = useCallback(
			(text: string) => {
				void dispatch(addCommentForArticle(text));
			},
			[dispatch],
		);

		useInitialEffect(() => {
			void dispatch(fetchCommentsByArticleId(id));
		});

		return (
			<VStack gap={'16'} max className={classNames('', {}, [className])}>
				<ToggleFeatures
					name={'isAppRedesigned'}
					on={<Text size={'l'} title={t('Комментарии')} />}
					off={
						<TextDeprecated
							size={TextSize.L}
							title={t('Комментарии')}
						/>
					}
				/>
				<Suspense fallback={<Loader />}>
					<AddCommentForm onSendComment={onSendComment} />
				</Suspense>
				<CommentList
					isLoading={commentsIsLoading}
					comments={comments}
				/>
			</VStack>
		);
	},
);
