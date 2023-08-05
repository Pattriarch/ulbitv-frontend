import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppEffect } from '@/shared/lib/hooks/useAppEffect/useAppEffect';
import { Button } from '@/shared/ui/deprecated/Button';

// Компонент для тестирования ErrorBoundary
export const BugButton = (): JSX.Element => {
	const [error, setError] = useState(false);
	const { t } = useTranslation();

	const onThrow = (): void => {
		setError(true);
	};

	useAppEffect(() => {
		if (error) {
			throw new Error();
		}
	}, [error]);

	return <Button onClick={onThrow}>{t('throw error')}</Button>;
};
