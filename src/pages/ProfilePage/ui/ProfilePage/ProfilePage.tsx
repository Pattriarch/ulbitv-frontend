import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack/VStack/VStack';
import { EditableProfileCard } from 'features/editableProfileCard';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';

export interface ProfilePageProps {
    className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps): JSX.Element => {
    const { id } = useParams<{ id: string, }>();
    const { t } = useTranslation('profile');

    if (!id) {
        return <Text text={t('Профиль не найден')}/>;
    }

    return (
        <Page className={classNames('', {}, [className])}>
            <VStack max gap={'16'}>
                <EditableProfileCard id={id}/>
            </VStack>
        </Page>
    );
});

export default ProfilePage;
