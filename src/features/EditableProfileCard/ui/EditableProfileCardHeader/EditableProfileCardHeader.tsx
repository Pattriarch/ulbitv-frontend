import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/deprecated/Text';

import { getCanCurrentUserEditProfile } from '../../model/selectors/getCanCurrentUserEditProfile/getCanCurrentUserEditProfile';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

interface EditableProfileCardHeaderProps {
	className?: string;
	isLoading?: boolean;
}

export const EditableProfileCardHeader = memo(
	(props: EditableProfileCardHeaderProps) => {
		const { className, isLoading } = props;
		const { t } = useTranslation('profile');
		const canEdit = useSelector(getCanCurrentUserEditProfile);
		const readonly = useSelector(getProfileReadonly);
		const dispatch = useAppDispatch();

		const onEdit = useCallback(() => {
			dispatch(profileActions.setReadonly(false));
		}, [dispatch]);

		const onCancelEdit = useCallback(() => {
			dispatch(profileActions.cancelEdit());
		}, [dispatch]);

		const onSave = useCallback(() => {
			void dispatch(updateProfileData());
		}, [dispatch]);

		if (isLoading) {
			return null;
		}

		return (
			<HStack
				max
				justify={'between'}
				className={classNames('', {}, [className])}
			>
				<Text title={t('Профиль')} />
				{canEdit && (
					<>
						{readonly ? (
							<Button
								type={'button'}
								theme={ButtonTheme.OUTLINE}
								onClick={onEdit}
								data-testid={
									'EditableProfileCardHeader.EditButton'
								}
							>
								{t('Редактировать')}
							</Button>
						) : (
							<HStack gap={'8'}>
								<Button
									type={'button'}
									theme={ButtonTheme.OUTLINE_RED}
									onClick={onCancelEdit}
									data-testid={
										'EditableProfileCardHeader.CancelButton'
									}
								>
									{t('Отменить')}
								</Button>
								<Button
									type={'button'}
									theme={ButtonTheme.OUTLINE}
									onClick={onSave}
									data-testid={
										'EditableProfileCardHeader.SaveButton'
									}
								>
									{t('Сохранить')}
								</Button>
							</HStack>
						)}
					</>
				)}
			</HStack>
		);
	},
);
