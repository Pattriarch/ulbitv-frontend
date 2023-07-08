import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Page } from 'shared/ui/Page/Page';

const MainPage = (): JSX.Element => {
    const { t } = useTranslation('main');
    const [value, setValue] = useState('');

    const onChange = (val: string): void => {
        setValue(val);
    };

    return (
        <Page>
            {t('Главная страница')}
            <Input
                placeholder={'Введите текст'}
                value={value}
                onChange={onChange}
            />
        </Page>
    );
};

export default MainPage;
