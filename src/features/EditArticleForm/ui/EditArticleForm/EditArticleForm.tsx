import { classNames } from 'shared/lib/classNames/classNames';
import cls from './EditArticleForm.module.scss';
import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getEditArticleForm } from '../../model/selectors/editArticleFormSelectors';
import { editArticleFormActions } from '../../model/slices/editArticleFormSlice';
import { Input } from 'shared/ui/Input/Input';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';

interface EditArticleFormProps {
	className?: string;
	id: string;
}

export const EditArticleForm = memo(({ className, id }: EditArticleFormProps) => {
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        if (id) {
            void dispatch(fetchArticleById(id));
        }
    });

    const formData = useSelector(getEditArticleForm);

    const onChangeImage = useCallback((value: string) => {
        void dispatch(editArticleFormActions.updateArticle({ img: value || '' }));
    }, [dispatch]);

    const onChangeTitle = useCallback((value: string) => {
        void dispatch(editArticleFormActions.updateArticle({ title: value || '' }));
    }, [dispatch]);

    const onChangeSubtitle = useCallback((value: string) => {
        void dispatch(editArticleFormActions.updateArticle({ subtitle: value || '' }));
    }, [dispatch]);

    return (
        <div className={classNames(cls.EditArticleForm, {}, [className])}>
            <Input className={cls.title} value={formData?.title} onChange={onChangeTitle}/>
        </div>
    );
});
