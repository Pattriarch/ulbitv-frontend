import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import { Page } from '@/widgets/Page/ui/Page';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { EditableProfileCard } from '@/features/editableProfileCard';
import { useParams } from 'react-router-dom';

export interface ProfilePageProps {
    className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps): JSX.Element => {
    const { id } = useParams<{ id: string, }>();

    return (
        <Page className={classNames('', {}, [className])}>
            <VStack max gap={'16'}>
                <EditableProfileCard id={id}/>
            </VStack>
        </Page>
    );
});

export default ProfilePage;
