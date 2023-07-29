import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';

interface NavbarProps {
	className?: string;
	short?: boolean;
}

export const LangSwitcher = memo(
	({ className, short }: NavbarProps): JSX.Element => {
		const { t, i18n } = useTranslation();

		const toggle = (): void => {
			void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
		};

		return (
			<ToggleFeatures name={'isAppRedesigned'} on={
				<Button variant={'clear'} onClick={toggle}>
					{short ? t('Короткий язык') : t('Язык')}
				</Button>
			} off={
				<ButtonDeprecated
					className={classNames('', {}, [className])}
					theme={ButtonTheme.CLEAR}
					onClick={toggle}
				>
					{short ? t('Короткий язык') : t('Язык')}
				</ButtonDeprecated>
			} />
		);
	},
);
