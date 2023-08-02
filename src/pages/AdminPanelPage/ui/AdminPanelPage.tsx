import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ToggleFeatures } from '@/shared/lib/features';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { Page } from '@/widgets/Page';

const AdminPanelPage = memo((): JSX.Element => {
	const { t } = useTranslation();

	return (
		<Page data-testid={'AdminPanelPage'}>
			<ToggleFeatures
				name={'isAppRedesigned'}
				on={<Text title={t('Админ панель')} size={'l'} tag={'h1'} />}
				off={
					<TextDeprecated
						title={t('Админ панель')}
						size={TextSize.L}
						tag={'h1'}
					/>
				}
			/>
		</Page>
	);
});

export default AdminPanelPage;
