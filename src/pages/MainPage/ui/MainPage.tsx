import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Page } from 'widgets/Page/ui/Page';
import { HStack } from 'shared/ui/Stack';
import { ListBox } from 'shared/ui/ListBox/ListBox';

const MainPage = memo((): JSX.Element => {
    const { t } = useTranslation('main');
    const [value, setValue] = useState('');

    const onChange = (val: string): void => {
        setValue(val);
    };

    return (
        <Page>
            {t('Главная страница')}
        </Page>
    );
});

export default MainPage;
