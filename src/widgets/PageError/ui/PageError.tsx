import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './PageError.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button/Button';
import { memo } from 'react';

interface PageErrorProps {
	className?: string;
}

export const PageError = memo(({ className }: PageErrorProps): JSX.Element => {
    const { t } = useTranslation();

    const reloadPage = (): void => {
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <Button onClick={reloadPage}>
                {t('Обновить страницу')}
            </Button>
        </div>
    );
});
