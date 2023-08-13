import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppEffect } from '@/shared/lib/hooks/useAppEffect/useAppEffect';
import { Button } from '@/shared/ui/deprecated/Button';

/**
 * Компонент `BugButton` предназначен для демонстрации или проверки механизма ErrorBoundary.
 * Когда пользователь нажимает на эту кнопку, вызывается ошибка, которая может быть перехвачена компонентом ErrorBoundary.
 *
 * @returns {JSX.Element} Возвращает кнопку, которая при нажатии вызывает ошибку.
 */
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
