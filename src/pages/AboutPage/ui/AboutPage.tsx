import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ToggleFeatures } from '@/shared/lib/features';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { Page } from '@/widgets/Page';

const AboutPage = memo((): JSX.Element => {
	const { t } = useTranslation('about');

	return (
		<Page data-testid={'AboutPage'}>
			<ToggleFeatures
				name={'isAppRedesigned'}
				on={<Text title={t('О сайте')} size={'l'} tag={'h1'} />}
				off={
					<TextDeprecated
						title={t('О сайте')}
						size={TextSize.L}
						tag={'h1'}
					/>
				}
			/>
		</Page>
	);
});

export default AboutPage;
