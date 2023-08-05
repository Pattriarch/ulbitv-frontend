import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@/entities/User';
import {
	getFeatureFlag,
	ToggleFeatures,
	updateFeatureFlags,
} from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useForceUpdate } from '@/shared/lib/render/forceUpdate';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

interface UiDesignSwitcherProps {
	className?: string;
}

export const UiDesignSwitcher = memo((props: UiDesignSwitcherProps) => {
	const { className } = props;
	const { t } = useTranslation();
	const isAppRedesigned = getFeatureFlag('isAppRedesigned');
	const dispatch = useAppDispatch();
	const authData = useSelector(getUserAuthData);
	const [isLoading, setIsLoading] = useState(false);
	const forceUpdate = useForceUpdate();

	const items = [
		{
			content: t('Новый'),
			value: 'new',
		},
		{
			content: t('Старый'),
			value: 'old',
		},
	];

	const onChange = async (value: string) => {
		if (authData) {
			setIsLoading(true);
			await dispatch(
				updateFeatureFlags({
					userId: authData.id,
					newFeatures: {
						isAppRedesigned: value === 'new',
					},
				}),
			).unwrap();
			setIsLoading(false);
			forceUpdate();
		}
	};

	return (
		<HStack gap={'8'}>
			<ToggleFeatures
				name={'isAppRedesigned'}
				on={<Text text={t('Вариант интерфейса')} />}
				off={<TextDeprecated text={t('Вариант интерфейса')} />}
			/>
			{isLoading ? (
				<Skeleton width={100} height={40} />
			) : (
				<ToggleFeatures
					name={'isAppRedesigned'}
					on={
						<ListBox
							onChange={onChange}
							items={items}
							value={isAppRedesigned ? 'new' : 'old'}
							className={className}
						/>
					}
					off={
						<ListBoxDeprecated
							onChange={onChange}
							items={items}
							value={isAppRedesigned ? 'new' : 'old'}
							className={className}
						/>
					}
				/>
			)}
		</HStack>
	);
});
