import React, { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Icon.module.scss';

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>;

interface IconBaseProps extends SvgProps {
	className?: string;
	Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
	'data-testid'?: string;
}

interface NonClickableIconProps extends IconBaseProps {
	clickable?: false;
}

interface ClickableIconProps extends IconBaseProps {
	clickable: true;
	onClick: () => void;
}

type IconProps = NonClickableIconProps | ClickableIconProps;

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
