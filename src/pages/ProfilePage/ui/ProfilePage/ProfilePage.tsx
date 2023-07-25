import { memo } from "react";
import { useParams } from "react-router-dom";

import { EditableProfileCard } from "@/features/editableProfileCard";
import { ProfileRating } from "@/features/profileRating";
import { classNames } from "@/shared/lib/classNames/classNames";
import { VStack } from "@/shared/ui/Stack";
import { Page } from "@/widgets/Page";

export interface ProfilePageProps {
  className?: string;
}

const ProfilePage = memo((props: ProfilePageProps): JSX.Element => {
  const { className } = props;
  const { id } = useParams<{ id: string }>();

  return (
    <Page
      data-testid={"ProfilePage"}
      className={classNames("", {}, [className])}
    >
      <VStack max gap={"16"}>
        <EditableProfileCard id={id} />
        {id && <ProfileRating profileId={id} />}
      </VStack>
    </Page>
  );
});

export default ProfilePage;
