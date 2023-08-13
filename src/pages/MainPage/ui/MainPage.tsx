import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ToggleFeatures } from '@/shared/lib/features';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { Page } from '@/widgets/Page';

/**
 * Компонент, представляющий главную страницу.
 *
 * @component
 * @returns {JSX.Element} Компонент MainPage.
 */
const MainPage = memo((): JSX.Element => {
	const { t } = useTranslation('main');

	return (
		<Page data-testid={'MainPage'}>
			<ToggleFeatures
				name={'isAppRedesigned'}
				on={
					<Text title={t('Главная страница')} size={'l'} tag={'h1'} />
				}
				off={
					<TextDeprecated
						title={t('Главная страница')}
						size={TextSize.L}
						tag={'h1'}
					/>
				}
			/>
		</Page>
	);
});

export default MainPage;
