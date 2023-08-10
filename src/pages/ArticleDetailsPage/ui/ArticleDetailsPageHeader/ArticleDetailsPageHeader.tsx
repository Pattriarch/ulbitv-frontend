import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getCanEditArticle } from '../../model/selectors/article';

import { getArticleDetailsData } from '@/entities/Article';
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { HStack } from '@/shared/ui/redesigned/Stack';

interface ArticleDetailsPageHeaderProps {
	className?: string;
}

export const ArticleDetailsPageHeader = memo(
	({ className }: ArticleDetailsPageHeaderProps) => {
		const navigate = useNavigate();
		const { t } = useTranslation();

		const canEdit = useSelector(getCanEditArticle);
		const article = useSelector(getArticleDetailsData);

		const onBackToList = useCallback(() => {
			navigate(getRouteArticles());
		}, [navigate]);

		const onEditArticle = useCallback(() => {
			if (article?.id) {
				navigate(getRouteArticleEdit(article.id));
			}
		}, [navigate, article]);

		return (
			<HStack
				max
				justify={'between'}
				className={classNames('', {}, [className])}
			>
				<Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
					{t('Назад к списку')}
				</Button>
				{canEdit && (
					<Button theme={ButtonTheme.OUTLINE} onClick={onEditArticle}>
						{t('Редактировать')}
					</Button>
				)}
			</HStack>
		);
	},
);
