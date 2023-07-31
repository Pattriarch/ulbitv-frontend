import { Menu } from '@headlessui/react';
import { Fragment, memo, type ReactNode } from 'react';

import { AppLink } from '../../../AppLink';
import popupCls from '../../styles/popup.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { type DropdownDirection } from '@/shared/types';

import cls from './Dropdown.module.scss';

export interface DropdownItem {
	disabled?: boolean;
	content?: ReactNode;
	onClick?: () => void;
	href?: string;
}

interface DropdownProps {
	className?: string;
	items: DropdownItem[];
	trigger: ReactNode;
	direction?: DropdownDirection;
}

export const Dropdown = memo((props: DropdownProps) => {
	const { className, items, trigger, direction = 'bottomRight' } = props;

	const menuAdditionalClasses = [popupCls[direction], popupCls.menu];

	return (
		<Menu
			as={'div'}
			className={classNames(cls.Dropdown, {}, [
				className,
				popupCls.popup,
			])}
		>
			<Menu.Button className={popupCls.trigger}>{trigger}</Menu.Button>
			<Menu.Items
				className={classNames(cls.menu, {}, menuAdditionalClasses)}
			>
				{items.map((item, index) => {
					const content = ({ active }: { active: boolean, }) => {
						return item.href ? (
							<AppLink
								to={item.href}
								className={classNames(cls.item, {
									[popupCls.active]: active,
								})}
							>
								{item.content}
							</AppLink>
						) : (
							<button
								type={'button'}
								onClick={item.onClick}
								className={classNames(cls.item, {
									[popupCls.active]: active,
								})}
							>
								{item.content}
							</button>
						);
					};

					return (
						<Menu.Item
							key={`dropdown-key-${index}`}
							as={Fragment}
							disabled={item.disabled}
						>
							{content}
						</Menu.Item>
					);
				})}
			</Menu.Items>
		</Menu>
	);
});
