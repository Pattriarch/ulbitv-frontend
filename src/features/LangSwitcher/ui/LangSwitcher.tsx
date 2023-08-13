import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import {
	Button as ButtonDeprecated,
	ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Button } from '@/shared/ui/redesigned/Button';

interface NavbarProps {
	/**
	 * Дополнительные стили компонента.
	 */
	className?: string;

	/**
	 * Определяет, будет ли отображаться сокращенная версия текста.
	 * Если true, то текст будет сокращен, например, "Russian" станет "Ru".
	 */
	short?: boolean;
}

/**
 * Компонент LangSwitcher - переключатель языка.
 *
 * @component
 *
 * @param {Object} props - Пропсы компонента.
 * @param {string} props.className - Дополнительные стили компонента.
 * @param {boolean} props.short - Флаг, указывающий на короткий режим переключателя.
 * @returns {JSX.Element} - Возвращает JSX элемент переключателя языка.
 */
export const LangSwitcher = memo(
	({ className, short }: NavbarProps): JSX.Element => {
		const { t, i18n } = useTranslation();

		const toggle = (): void => {
			void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
		};

		return (
			<ToggleFeatures
				name={'isAppRedesigned'}
				on={
					<Button variant={'clear'} onClick={toggle}>
						{short ? t('Короткий язык') : t('Язык')}
					</Button>
				}
				off={
					<ButtonDeprecated
						className={classNames('', {}, [className])}
						theme={ButtonTheme.CLEAR}
						onClick={toggle}
					>
						{short ? t('Короткий язык') : t('Язык')}
					</ButtonDeprecated>
				}
			/>
		);
	},
);
