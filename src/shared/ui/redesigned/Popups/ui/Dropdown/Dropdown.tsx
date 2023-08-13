import { Menu } from '@headlessui/react';
import { Fragment, memo, type ReactNode } from 'react';

import { AppLink } from '../../../AppLink';
import { Button } from '../../../Button';
import popupCls from '../../styles/popup.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { type DropdownDirection } from '@/shared/types';

import cls from './Dropdown.module.scss';

/**
 * Свойства элемента выпадающего списка.
 *
 * @interface
 * @property {boolean} [disabled] - Флаг, указывающий, отключен ли элемент выпадающего списка.
 * @property {ReactNode} [content] - Содержимое элемента выпадающего списка.
 * @property {() => void} [onClick] - Callback-функция, вызываемая при клике на элемент выпадающего списка.
 * @property {string} [href] - Ссылка для элемента выпадающего списка.
 */
export interface DropdownItem {
	disabled?: boolean;
	content?: ReactNode;
	onClick?: () => void;
	href?: string;
}

/**
 * Свойства компонента Dropdown.
 *
 * @interface
 * @property {string} [className] - Дополнительные стили компонента.
 * @property {DropdownItem[]} items - Элементы выпадающего списка.
 * @property {ReactNode} trigger - Элемент, который будет использоваться в качестве триггера для открытия выпадающего списка.
 * @property {DropdownDirection} [direction] - Направление отображения выпадающего списка.
 */
interface DropdownProps {
	className?: string;
	items: DropdownItem[];
	trigger: ReactNode;
	direction?: DropdownDirection;
}

/**
 * Компонент для создания выпадающего списка с элементами.
 *
 * @component
 * @param {DropdownProps} props - Свойства компонента.
 * @returns {JSX.Element} Компонент Dropdown.
 */
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
							<Button
								type={'button'}
								variant={'clear'}
								onClick={item.onClick}
								className={classNames(cls.item, {
									[popupCls.active]: active,
								})}
							>
								{item.content}
							</Button>
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
