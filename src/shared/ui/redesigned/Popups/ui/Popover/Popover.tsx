import { Popover as HPopover } from '@headlessui/react';
import React, { memo, type ReactNode } from 'react';

import popupCls from '../../styles/popup.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { type DropdownDirection } from '@/shared/types';

import cls from './Popover.module.scss';

/**
 * Свойства компонента Popover.
 *
 * @interface
 * @property {string} [className] - Дополнительные стили компонента.
 * @property {ReactNode} trigger - Элемент, который будет использоваться в качестве триггера для открытия Popover.
 * @property {DropdownDirection} [direction] - Направление отображения Popover.
 * @property {ReactNode} children - Дочерние элементы, которые будут отображаться внутри Popover.
 */
interface PopoverProps {
	className?: string;
	trigger: ReactNode;
	direction?: DropdownDirection;
	children: ReactNode;
}

/**
 * Компонент для создания Popover с содержимым, открывающимся по клику на триггер.
 *
 * @component
 * @param {PopoverProps} props - Свойства компонента.
 * @returns {JSX.Element} Компонент Popover.
 */
export const Popover = memo((props: PopoverProps) => {
	const { className, trigger, direction = 'bottomRight', children } = props;

	const menuAdditionalClasses = [popupCls[direction], popupCls.menu];

	return (
		<HPopover
			className={classNames(cls.Popover, {}, [className, popupCls.popup])}
		>
			<HPopover.Button as={'div'} className={popupCls.trigger}>
				{trigger}
			</HPopover.Button>

			<HPopover.Panel
				className={classNames(cls.panel, {}, menuAdditionalClasses)}
			>
				{children}
			</HPopover.Panel>
		</HPopover>
	);
});
