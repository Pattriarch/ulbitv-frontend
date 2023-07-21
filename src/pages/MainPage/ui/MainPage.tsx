import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const MainPage = memo((): JSX.Element => {
    const { t } = useTranslation('main');

    return (
        <Page>
            {t('Главная страница')}
        </Page>
    );
});

export default MainPage;
