import { memo, useCallback } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Text.module.scss';

export type TextWeight = 'normal' | 'bold' | 'extrabold';
export type TextVariant = 'primary' | 'error' | 'accent';
export type TextAlign = 'left' | 'center' | 'right';
export type TextSize = 's' | 'm' | 'l';
export type TextTag = 'p' | 'h1' | 'h2' | 'h3';

interface TextProps {
	/**
	 * Дополнительные стили компонента.
	 */
	className?: string;

	/**
	 * Заголовок (title) компонента, который может использоваться для дополнительных описаний.
	 */
	title?: string;

	/**
	 * Текст, который будет отображен.
	 */
	text?: string;

	/**
	 * Вариант стиля текста.
	 */
	variant?: TextVariant;

	/**
	 * Выравнивание текста.
	 */
	align?: TextAlign;

	/**
	 * Размер текста согласно дизайн-системе.
	 */
	size?: TextSize;

	/**
	 * HTML-тег, который будет использоваться для отображения текста.
	 */
	tag?: TextTag;

	/**
	 * Толщина текста.
	 */
	weight?: TextWeight;

	/**
	 * Значение атрибута 'data-testid' для тестирования.
	 */
	'data-testid'?: string;
}

/**
 * Компонент Text представляет текст с определенными стилями и параметрами.
 *
 * @component
 * @param {TextProps} props - Свойства компонента.
 * @returns {JSX.Element} Компонент Text.
 */
export const Text = memo((props: TextProps): JSX.Element => {
	const {
		className,
		title,
		text,
		variant = 'primary',
		align = 'left',
		size = 'm',
		tag = 'p',
		weight = 'normal',
		'data-testid': dataTestId = 'Text',
	} = props;

	const additionalClasses = [
		className,
		cls[variant],
		cls[align],
		cls[size],
		cls[weight],
	];

	const getTitle = useCallback(() => {
		switch (tag) {
			case 'p':
				return (
					<p
						className={cls.title}
						data-testid={`${dataTestId}.Header`}
					>
						{title}
					</p>
				);
			case 'h1':
				return (
					<h1
						className={cls.title}
						data-testid={`${dataTestId}.Header`}
					>
						{title}
					</h1>
				);
			case 'h2':
				return (
					<h2
						className={cls.title}
						data-testid={`${dataTestId}.Header`}
					>
						{title}
					</h2>
				);
			case 'h3':
				return (
					<h3
						className={cls.title}
						data-testid={`${dataTestId}.Header`}
					>
						{title}
					</h3>
				);
		}
	}, [dataTestId, tag, title]);

	return (
		<div className={classNames(cls.Text, {}, additionalClasses)}>
			{title && getTitle()}
			{text && (
				<p className={cls.text} data-testid={`${dataTestId}.Paragraph`}>
					{text}
				</p>
			)}
		</div>
	);
});
