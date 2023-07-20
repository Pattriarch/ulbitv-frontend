import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import { Page } from '@/widgets/Page/ui/Page';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { EditableProfileCard } from '@/features/editableProfileCard';
import { useParams } from 'react-router-dom';
import { ProfileRating } from '@/features/profileRating';

export interface ProfilePageProps {
    className?: string;
}

const ProfilePage = memo((props: ProfilePageProps): JSX.Element => {
    const { className } = props;
    const { id } = useParams<{ id: string, }>();

    return (
        <Page className={classNames('', {}, [className])}>
            <VStack max gap={'16'}>
                <EditableProfileCard id={id}/>
                {id && <ProfileRating profileId={id}/>}
            </VStack>
        </Page>
    );
});

export default ProfilePage;
