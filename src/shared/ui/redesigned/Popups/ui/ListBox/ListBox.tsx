import { Listbox as HListBox } from '@headlessui/react';
import { Fragment, type ReactNode, useMemo } from 'react';

import { HStack } from '../../../../redesigned/Stack';
import { Button } from '../../../Button/Button';
import { Icon } from '../../../Icon';
import popupCls from '../../styles/popup.module.scss';

import ArrowIcon from '@/shared/assets/icons/arrow-32-32.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { type DropdownDirection, typedMemo } from '@/shared/types';

import cls from './ListBox.module.scss';

/**
 * Элемент списка ListBox.
 *
 * @interface
 * @property {T} value - Значение элемента списка.
 * @property {ReactNode} content - Содержимое элемента списка.
 * @property {boolean} [disabled] - Флаг, указывающий, отключен ли элемент списка.
 */
export interface ListBoxItem<T extends string> {
	value: T;
	content: ReactNode;
	disabled?: boolean;
}

/**
 * Свойства компонента ListBox.
 *
 * @interface
 * @property {string} [className] - Дополнительные стили компонента.
 * @property {ListBoxItem<T>[]} [items] - Элементы списка.
 * @property {T} [value] - Текущее значение выбранного элемента списка.
 * @property {string} [defaultValue] - Значение по умолчанию для списка.
 * @property {(value: T) => void} [onChange] - Callback-функция, вызываемая при изменении выбранного значения.
 * @property {boolean} [readonly] - Флаг, указывающий, что список только для чтения.
 * @property {DropdownDirection} [direction] - Направление отображения списка.
 * @property {string} [label] - Текст метки для списка.
 */
interface ListBoxProps<T extends string> {
	className?: string;
	items?: ListBoxItem<T>[];
	value?: T;
	defaultValue?: string;
	onChange?: (value: T) => void;
	readonly?: boolean;
	direction?: DropdownDirection;
	label?: string;
}

/**
 * Компонент для создания списка с элементами и возможностью выбора.
 *
 * @component
 * @template T
 * @param {ListBoxProps<T>} props - Свойства компонента.
 * @returns {JSX.Element} Компонент ListBox.
 */
export const ListBox = typedMemo(<T extends string>(props: ListBoxProps<T>) => {
	const {
		className,
		items,
		value,
		defaultValue,
		onChange,
		readonly,
		direction = 'bottomRight',
		label,
	} = props;

	const optionsAdditionalClasses = [popupCls[direction], popupCls.menu];

	const selectedItem = useMemo(() => {
		return items?.find((item) => item.value === value);
	}, [items, value]);

	return (
		<HStack gap={'8'}>
			{label && (
				<p
					className={classNames(
						cls.label,
						{ [cls.readonly]: readonly },
						[],
					)}
				>{`${label}:`}</p>
			)}
			<HListBox
				disabled={readonly}
				as={'div'}
				className={classNames(cls.ListBox, {}, [
					className,
					popupCls.popup,
				])}
				value={value}
				onChange={onChange}
			>
				<HListBox.Button
					aria-readonly={readonly}
					className={popupCls.trigger}
					as={'div'}
				>
					<Button
						variant={'filled'}
						disabled={readonly}
						addonRight={<Icon Svg={ArrowIcon} />}
					>
						{selectedItem?.content ?? defaultValue}
					</Button>
				</HListBox.Button>
				<HListBox.Options
					className={classNames(
						cls.options,
						{},
						optionsAdditionalClasses,
					)}
				>
					{items?.map((item) => (
						<HListBox.Option
							key={item.value}
							value={item.value}
							disabled={item.disabled}
							as={Fragment}
						>
							{({ active, selected }) => (
								<li
									className={classNames(
										cls.item,
										{
											[popupCls.active]: active,
											[popupCls.selected]: selected,
											[popupCls.disabled]: item.disabled,
										},
										[],
									)}
								>
									{selected}
									{item.content}
								</li>
							)}
						</HListBox.Option>
					))}
				</HListBox.Options>
			</HListBox>
		</HStack>
	);
});
