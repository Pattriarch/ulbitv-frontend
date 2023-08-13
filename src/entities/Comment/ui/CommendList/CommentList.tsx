import { useTranslation } from 'react-i18next';

import { type Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

interface CommentListProps {
	/** Опциональный класс для стилизации компонента. */
	className?: string;

	/** Массив комментариев для отображения. */
	comments?: Comment[];

	/** Флаг, указывающий, выполняется ли загрузка данных. */
	isLoading?: boolean;
}

/**
 * Компонент для отображения списка комментариев.
 *
 * @param {CommentListProps} props Свойства компонента.
 * @returns {JSX.Element} Список комментариев.
 */
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
				<ToggleFeatures
					name={'isAppRedesigned'}
					on={<Text text={t('Комментарии отсутствуют')} />}
					off={<TextDeprecated text={t('Комментарии отсутствуют')} />}
				/>
			)}
		</VStack>
	);
};
