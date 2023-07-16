import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ListBox.module.scss';
import { Fragment, memo, type ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { Button } from '../../../Button/Button';
import { HStack } from '../../../Stack';
import { type DropdownDirection } from 'shared/types/ui';
import popupCls from '../../styles/popup.module.scss';

export interface ListBoxItem {
	value: string;
	content: ReactNode;
	disabled?: boolean;
}

interface ListBoxProps {
	className?: string;
	items?: ListBoxItem[];
	value?: string;
	defaultValue?: string;
	onChange: <T extends string>(value: T) => void;
	readonly?: boolean;
	direction?: DropdownDirection;
	label?: string;
}

export const ListBox = memo((props: ListBoxProps) => {
	const {
		className,
		items,
		value,
		defaultValue,
		onChange,
		readonly,
		direction = 'bottomRight',
		label
	} = props;

	const optionsClasses = [
		popupCls[direction]
	];

	return (
		<HStack gap={'8'}>
			{label && <p className={classNames(cls.label, { [cls.readonly]: readonly }, [])}>{`${label}>`}</p>}
			<HListBox
				disabled={readonly}
				as={'div'}
				className={classNames(cls.ListBox, {}, [className, popupCls.popup])}
				value={value}
				onChange={onChange}>
				{/* <HStack gap={'8'}> */}
				<HListBox.Button aria-readonly={readonly} className={popupCls.trigger}>
					{/* // todo: исправить кнопку здесь */}
					 <Button disabled={readonly}>
					    {value ?? defaultValue}
					 </Button>
				</HListBox.Button>
				{/* </HStack> */}
				<HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
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
											[popupCls.disabled]: item.disabled
										},
										[]
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
