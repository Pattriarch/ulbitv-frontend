import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
	useGetArticleRating,
	useRateArticle,
} from '../../api/articleRatingApi';

import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { ToggleFeatures } from '@/shared/lib/features';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

export interface ArticleRatingProps {
	/**
	 * Дополнительный класс для стилизации компонента.
	 */
	className?: string;

	/**
	 * Идентификатор статьи, которую нужно оценить.
	 */
	articleId: string;
}

/**
 * Компонент для оценки статьи.
 *
 * @component
 * @param {ArticleRatingProps} props - Свойства компонента ArticleRating.
 * @returns {JSX.Element} Компонент для оценки статьи.
 */
const ArticleRating = memo((props: ArticleRatingProps) => {
	const { className, articleId } = props;
	const { t } = useTranslation();
	const userData = useSelector(getUserAuthData);

	// Получение данных об оценке статьи
	const { data, isLoading } = useGetArticleRating({
		articleId,
		userId: userData?.id ?? '',
	});

	// Инициализация мутации для оценки статьи
	const [rateArticleMutation] = useRateArticle();

	/**
	 * Обработчик оценки статьи.
	 *
	 * @param {number} starsCount - Количество звезд для оценки.
	 * @param {string} [feedback] - Обратная связь.
	 */
	const handleRateArticle = useCallback(
		(starsCount: number, feedback?: string) => {
			try {
				void rateArticleMutation({
					articleId,
					userId: userData?.id ?? '',
					rate: starsCount,
					feedback,
				});
			} catch (e) {
				console.log(e);
			}
		},
		[articleId, rateArticleMutation, userData?.id],
	);

	/**
	 * Обработчик отмены оценки.
	 *
	 * @param {number} starsCount - Количество звезд для оценки.
	 */
	const onCancel = useCallback(
		(starsCount: number) => {
			handleRateArticle(starsCount);
		},
		[handleRateArticle],
	);

	/**
	 * Обработчик подтверждения оценки.
	 *
	 * @param {number} starsCount - Количество звезд для оценки.
	 * @param {string} [feedback] - Обратная связь.
	 */
	const onAccept = useCallback(
		(starsCount: number, feedback?: string) => {
			handleRateArticle(starsCount, feedback);
		},
		[handleRateArticle],
	);

	// Если данные загружаются, отображается индикатор загрузки
	if (isLoading) {
		return (
			<ToggleFeatures
				name={'isAppRedesigned'}
				on={<Skeleton width={'100%'} height={120} />}
				off={<SkeletonDeprecated width={'100%'} height={120} />}
			/>
		);
	}

	const rating = data?.[0];

	return (
		<RatingCard
			onAccept={onAccept}
			onCancel={onCancel}
			rate={rating?.rate}
			className={className}
			title={t('Оцените статью')}
			feedbackTitle={t(
				'Оставьте свой отзыв о статье, это поможет улучшить качество',
			)}
			hasFeedback
		/>
	);
});

export default ArticleRating;
