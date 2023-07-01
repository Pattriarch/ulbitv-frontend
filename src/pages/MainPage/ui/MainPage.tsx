import React from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';

const MainPage = (): JSX.Element => {
    const { t } = useTranslation();

    return (
        <div>
            <Counter/>
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;
