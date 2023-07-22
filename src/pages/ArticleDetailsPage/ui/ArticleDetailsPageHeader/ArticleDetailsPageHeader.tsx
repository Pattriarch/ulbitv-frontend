import { classNames } from '@/shared/lib/classNames/classNames';
import React, { memo, useCallback } from 'react';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from '@/entities/Article';
import { getCanEditArticle } from '../../model/selectors/article';
import { HStack } from '@/shared/ui/Stack';
import { getRouteArticleDetails, getRouteArticles } from '@/shared/const/router';

interface ArticleDetailsPageHeaderProps {
	className?: string;
}

export const ArticleDetailsPageHeader =
	memo(({ className }: ArticleDetailsPageHeaderProps) => {
		const navigate = useNavigate();
		const { t } = useTranslation();

		const canEdit = useSelector(getCanEditArticle);
		const article = useSelector(getArticleDetailsData);

		const onBackToList = useCallback(() => {
			navigate(getRouteArticles());
		}, [navigate]);

		const onEditArticle = useCallback(() => {
			if (article?.id) {
				navigate(getRouteArticleDetails(article.id));
			}
		}, [navigate, article]);

		return (
			<HStack max justify={'between'} className={classNames('', {}, [className])}>
				<Button
					theme={ButtonTheme.OUTLINE}
					onClick={onBackToList}
				>
					{t('Назад к списку')}
				</Button>
				{canEdit && (
					<Button
						theme={ButtonTheme.OUTLINE}
						onClick={onEditArticle}
					>
						{t('Редактировать')}
					</Button>
				)}
			</HStack>
		);
	});
