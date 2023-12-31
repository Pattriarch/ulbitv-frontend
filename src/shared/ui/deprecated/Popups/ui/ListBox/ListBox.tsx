import { Listbox as HListBox } from '@headlessui/react';
import { Fragment, type ReactNode, useMemo } from 'react';

import { HStack } from '../../../../redesigned/Stack';
import { Button } from '../../../Button/Button';
import popupCls from '../../styles/popup.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { type DropdownDirection, typedMemo } from '@/shared/types';

import cls from './ListBox.module.scss';

export interface ListBoxItem<T extends string> {
	value: T;
	content: ReactNode;
	disabled?: boolean;
}

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
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
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

	const optionsClasses = [popupCls[direction]];

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
				>{`${label}>`}</p>
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
					<Button disabled={readonly}>
						{selectedItem?.content ?? defaultValue}
					</Button>
				</HListBox.Button>
				<HListBox.Options
					className={classNames(cls.options, {}, optionsClasses)}
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
											[popupCls.disabled]: item.disabled,
										},
										[],
									)}
								>
									{selected && '> '}
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
