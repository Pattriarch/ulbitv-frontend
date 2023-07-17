import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Popover.module.scss';
import React, { memo, type ReactNode } from 'react';
import { Popover as HPopover } from '@headlessui/react';
import { type DropdownDirection } from '@/shared/types/ui';
import popupCls from '../../styles/popup.module.scss';

interface PopoverProps {
	className?: string;
	trigger: ReactNode;
	direction?: DropdownDirection;
	children: ReactNode;
}

export const Popover = memo((props: PopoverProps) => {
	const {
		className,
		trigger,
		direction = 'bottomRight',
		children
	} = props;

	const menuClasses = [
		popupCls[direction]
	];

	return (
		<HPopover className={classNames(cls.Popover, {}, [className, popupCls.popup])}>
			<HPopover.Button className={popupCls.trigger}>
				{trigger}
			</HPopover.Button>

			<HPopover.Panel
				className={classNames(cls.panel, {}, menuClasses)}
			>
				{children}
			</HPopover.Panel>
		</HPopover>
	);
});
