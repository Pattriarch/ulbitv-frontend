import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getCanCurrentUserEditProfile } from '../../model/selectors/getCanCurrentUserEditProfile/getCanCurrentUserEditProfile';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slices/profileSlice';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
	Button as ButtonDeprecated,
	ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

import cls from './EditableProfileCardHeader.module.scss';

interface EditableProfileCardHeaderProps {
	/**
	 * Дополнительные стили компонента.
	 */
	className?: string;

	/**
	 * Состояние загрузки данных. Если true, загрузка активна.
	 */
	isLoading?: boolean;
}

/**
 * Компонент EditableProfileCardHeader - заголовок редактируемой карточки профиля.
 *
 * @component
 *
 * @param {Object} props - Пропсы компонента.
 * @param {string} props.className - Дополнительные стили компонента.
 * @param {boolean} props.isLoading - Флаг загрузки данных.
 * @returns {JSX.Element|null} - Возвращает JSX элемент заголовка редактируемой карточки профиля или null, если идет загрузка данных.
 */
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
			<ToggleFeatures
				name={'isAppRedesigned'}
				on={
					<Card padding={'24'} border={'partial'} max>
						<HStack
							max
							justify={'between'}
							className={classNames(
								cls.EditableProfileCardHeaderRedesigned,
								{},
								[className],
							)}
						>
							<Text title={t('Профиль')} />
							{canEdit && (
								<>
									{readonly ? (
										<Button
											type={'button'}
											variant={'outline'}
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
												variant={'outline'}
												color={'error'}
												onClick={onCancelEdit}
												data-testid={
													'EditableProfileCardHeader.CancelButton'
												}
											>
												{t('Отменить')}
											</Button>
											<Button
												type={'button'}
												variant={'outline'}
												color={'success'}
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
					</Card>
				}
				off={
					<HStack
						max
						justify={'between'}
						className={classNames('', {}, [className])}
					>
						<TextDeprecated title={t('Профиль')} />
						{canEdit && (
							<>
								{readonly ? (
									<ButtonDeprecated
										type={'button'}
										theme={ButtonTheme.OUTLINE}
										onClick={onEdit}
										data-testid={
											'EditableProfileCardHeader.EditButton'
										}
									>
										{t('Редактировать')}
									</ButtonDeprecated>
								) : (
									<HStack gap={'8'}>
										<ButtonDeprecated
											type={'button'}
											theme={ButtonTheme.OUTLINE_RED}
											onClick={onCancelEdit}
											data-testid={
												'EditableProfileCardHeader.CancelButton'
											}
										>
											{t('Отменить')}
										</ButtonDeprecated>
										<ButtonDeprecated
											type={'button'}
											theme={ButtonTheme.OUTLINE}
											onClick={onSave}
											data-testid={
												'EditableProfileCardHeader.SaveButton'
											}
										>
											{t('Сохранить')}
										</ButtonDeprecated>
									</HStack>
								)}
							</>
						)}
					</HStack>
				}
			/>
		);
	},
);
