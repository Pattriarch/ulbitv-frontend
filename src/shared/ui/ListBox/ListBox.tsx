import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ListBox.module.scss';
import { Fragment, memo, type ReactNode, useState } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { Button } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { HStack, VStack } from 'shared/ui/Stack';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

type DropdownDirection = 'top' | 'bottom';

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

const mapDirectionToClass: Record<DropdownDirection, string> = {
    bottom: cls.optionsBottom,
    top: cls.optionsTop
};

export const ListBox = memo((props: ListBoxProps) => {
    const {
        className,
        items,
        value,
        defaultValue,
        onChange,
        readonly,
        direction = 'bottom',
        label
    } = props;

    const optionsClasses = [
        mapDirectionToClass[direction]
    ];

    return (
        <HStack gap={'8'}>
        {label && <p className={classNames(cls.label, { [cls.readonly]: readonly }, [])}>{`${label}>`}</p>}
        <HListBox
            disabled={readonly}
            as={'div'}
            className={classNames(cls.ListBox, {}, [className])}
            value={value}
            onChange={onChange}>
            {/* <HStack gap={'8'}> */}
                <HListBox.Button aria-readonly={readonly} className={cls.trigger}>
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
                                        [cls.active]: active,
                                        [cls.disabled]: item.disabled
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
