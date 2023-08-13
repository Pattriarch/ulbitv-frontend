import React, { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Icon.module.scss';

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>;

/**
 * Свойства базового компонента иконки.
 *
 * @interface
 * @property {string} [className] - Дополнительные стили компонента.
 * @property {React.VFC<React.SVGProps<SVGSVGElement>>} Svg - Компонент SVG для отображения иконки.
 * @property {string} [data-testid] - Значение атрибута 'data-testid' для тестирования.
 */
interface IconBaseProps extends SvgProps {
	className?: string;
	Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
	'data-testid'?: string;
}

/**
 * Свойства компонента иконки, которая не кликабельна.
 *
 * @interface
 * @extends {IconBaseProps}
 */
interface NonClickableIconProps extends IconBaseProps {
	clickable?: false;
}

/**
 * Свойства компонента иконки, которая кликабельна.
 *
 * @interface
 * @extends {IconBaseProps}
 */
interface ClickableIconProps extends IconBaseProps {
	clickable: true;
	onClick: () => void;
}

/**
 * Тип, объединяющий свойства иконки (кликабельной и не кликабельной).
 *
 * @type {NonClickableIconProps | ClickableIconProps}
 */
type IconProps = NonClickableIconProps | ClickableIconProps;

/**
 * Компонент для отображения иконок с поддержкой кликабельности.
 *
 * @component
 * @param {IconProps} props - Свойства компонента.
 * @returns {JSX.Element} Компонент Icon.
 */
export const Icon = memo((props: IconProps) => {
	const {
		className,
		clickable,
		Svg,
		width = 32,
		height = 32,
		'data-testid': testId = 'Icon',
		...otherProps
	} = props;

	const icon = (
		<Svg
			className={!clickable ? classNames(cls.Icon, {}, [className]) : ''}
			width={width}
			height={height}
			{...otherProps}
			onClick={undefined}
		/>
	);

	if (clickable) {
		return (
			// устанавливаем height, width; чтобы размер кнопки всегда совпадал с размером иконки
			<button
				type={'button'}
				className={
					clickable
						? classNames(cls.Icon, {}, [className, cls.button])
						: ''
				}
				onClick={props.onClick}
				style={{ height, width }}
				data-testid={testId}
			>
				{icon}
			</button>
		);
	}

	return icon;
});
