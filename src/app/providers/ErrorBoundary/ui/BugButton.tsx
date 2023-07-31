import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/shared/ui/deprecated/Button';

// Компонент для тестирования ErrorBoundary
export const BugButton = (): JSX.Element => {
	const [error, setError] = useState(false);
	const { t } = useTranslation();

	const onThrow = (): void => {
		setError(true);
	};

	useEffect(() => {
		if (error) {
			throw new Error();
		}
	}, [error]);

	return <Button onClick={onThrow}>{t('throw error')}</Button>;
};
