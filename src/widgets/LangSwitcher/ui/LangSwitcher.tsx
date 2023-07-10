import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface NavbarProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: NavbarProps): JSX.Element => {
    const { t, i18n } = useTranslation();

    const toggle = (): void => {
        void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={toggle}
        >
            {short ? t('Короткий язык') : t('Язык')}
        </Button>
    );
});
