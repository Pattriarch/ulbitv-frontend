import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { ArticleAdditionalInfo } from '../ArticleAdditionalInfo/ArticleAdditionalInfo';

import {
	getArticleDetailsData,
	getCanCurrentUserEditArticle,
} from '@/entities/Article';
import { getRouteArticleEdit } from '@/shared/const/router';
import { Card } from '@/shared/ui/redesigned/Card';

import cls from './ArticleAdditionalInfoContainer.module.scss';

interface AdditionalInfoContainerProps {
	className?: string;
}

export const ArticleAdditionalInfoContainer = memo(
	(props: AdditionalInfoContainerProps) => {
		const { className } = props;
		const article = useSelector(getArticleDetailsData);
		const isEditable = useSelector(getCanCurrentUserEditArticle);

		const navigate = useNavigate();

		const onEditArticle = useCallback(() => {
			if (article?.id) {
				navigate(getRouteArticleEdit(article.id));
			}
		}, [navigate, article]);

		if (!article) {
			return null;
		}

		return (
			<Card padding={'24'} border={'partial'} className={cls.card}>
				<ArticleAdditionalInfo
					onEdit={onEditArticle}
					isEditable={isEditable}
					author={article.user}
					createdAt={article.createdAt}
					views={article.views}
					className={className}
				/>
			</Card>
		);
	},
);
