import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Page } from 'widgets/Page/Page';
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
            <div>asdasd</div>
            <HStack>
                <div>jaskda</div>
                <ListBox
                    defaultValue={'Выберите значение'}
                    onChange={(value: string) => {}}
                    value={undefined}
                    items={[
                        { value: '1', content: '123' },
                        { value: '32', content: '46', disabled: true },
                        { value: '44', content: '1723' }
                    ]}
                />
            </HStack>
            <div>jdksda</div>
        </Page>
    );
});

export default MainPage;
