import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { UiDesignSwitcher } from '@/features/uiDesignSwitcher';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { Page } from '@/widgets/Page';
import { ToggleFeatures } from '@/shared/lib/features';

export interface SettingsPageProps {
	className?: string;
}

const SettingsPage = memo((props: SettingsPageProps) => {
	const { className } = props;
	const { t } = useTranslation();

	return (
		<Page>
			<VStack gap={'16'}>
				<ToggleFeatures
					name={'isAppRedesigned'}
					on={
						<Text
							tag={'h1'}
							size={'l'}
							title={t('Настройки пользователя')}
						/>
					}
					off={
						<TextDeprecated
							tag={'h1'}
							size={TextSize.L}
							title={t('Настройки пользователя')}
						/>
					}
				/>
				<UiDesignSwitcher />
			</VStack>
		</Page>
	);
});

export default SettingsPage;
