import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleEditPage.module.scss';
import { memo } from 'react';
import { Page } from '@/widgets/Page';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { EditArticleForm } from '@/features/EditArticleForm';
import { DynamicModuleLoader, type ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

export interface ArticleEditPageProps {
	className?: string;
}

const reducers: ReducersList = {
    // editArticleForm: editArticleFormReducer
};

const ArticleEditPage = memo(({ className }: ArticleEditPageProps) => {
    const { t } = useTranslation();
    const { id } = useParams<{ id: string, }>();
    const isEdit = Boolean(id);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
                {isEdit && id
                    ? `${t('Редактирование статьи с ID = ') + id}`
                    : t('Создание новой статьи')
                }
                {isEdit && id && <EditArticleForm id={id}/>}
            </Page>
        </DynamicModuleLoader>
    );
});

export default ArticleEditPage;
