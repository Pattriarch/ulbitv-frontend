import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { Text } from '@/shared/ui/redesigned/Text';

import cls from './PageError.module.scss';

interface PageErrorProps {
	className?: string;
}

export const PageError = memo(({ className }: PageErrorProps): JSX.Element => {
	const { t } = useTranslation();

	const reloadPage = (): void => {
		location.reload();
	};

	return (
		<div className={classNames(cls.PageError, {}, [className])}>
			<ToggleFeatures
				name={'isAppRedesigned'}
				on={
					<>
						<Text text={t('Произошла непредвиденная ошибка')} />
						<Button onClick={reloadPage}>
							{t('Обновить страницу')}
						</Button>
					</>
				}
				off={
					<>
						<TextDeprecated
							text={t('Произошла непредвиденная ошибка')}
						/>
						<ButtonDeprecated onClick={reloadPage}>
							{t('Обновить страницу')}
						</ButtonDeprecated>
					</>
				}
			/>
		</div>
	);
});
