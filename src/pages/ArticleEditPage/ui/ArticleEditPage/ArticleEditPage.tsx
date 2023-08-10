import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { getCanCurrentUserEditArticle } from '@/entities/Article';
import { AddArticleForm } from '@/features/AddArticleForm';
import { EditArticleForm } from '@/features/EditArticleForm';
import { getRouteForbidden } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { Page } from '@/widgets/Page';

import cls from './ArticleEditPage.module.scss';

export interface ArticleEditPageProps {
	className?: string;
}

const ArticleEditPage = memo(({ className }: ArticleEditPageProps) => {
	const { t } = useTranslation();
	const { id } = useParams<{ id: string, }>();
	const isEditable = useSelector(getCanCurrentUserEditArticle);
	const navigate = useNavigate();

	if (id && !isEditable) {
		navigate(getRouteForbidden());
	}

	return (
		<Page className={classNames(cls.ArticleEditPage, {}, [className])}>
			{isEditable && id ? (
				<ToggleFeatures
					name={'isAppRedesigned'}
					on={
						<Text
							tag={'h1'}
							size={'l'}
							title={`${t('Редактирование статьи с ID = ') + id}`}
						/>
					}
					off={
						<TextDeprecated
							size={TextSize.L}
							title={`${t('Редактирование статьи с ID = ') + id}`}
						/>
					}
				/>
			) : (
				<ToggleFeatures
					name={'isAppRedesigned'}
					on={<Text size={'l'} title={t('Создание новой статьи')} />}
					off={
						<TextDeprecated
							size={TextSize.L}
							title={t('Создание новой статьи')}
						/>
					}
				/>
			)}
			{isEditable && id && <EditArticleForm id={id} />}
			{!isEditable && <AddArticleForm />}
		</Page>
	);
});

export default ArticleEditPage;
