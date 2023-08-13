import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page';

/**
 * Компонент, представляющий страницу с сообщением о запрете доступа.
 *
 * @component
 * @returns {JSX.Element} Компонент ForbiddenPage.
 */
const ForbiddenPage = memo((): JSX.Element => {
	const { t } = useTranslation('about');

	return (
		<Page data-testid={'ForbiddenPage'}>
			{t('У вас нет доступа к этой странице')}
		</Page>
	);
});

export default ForbiddenPage;
