import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

const reducers: ReducersList = {
    profile: profileReducer
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps): JSX.Element => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        void dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfileCard/>
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
