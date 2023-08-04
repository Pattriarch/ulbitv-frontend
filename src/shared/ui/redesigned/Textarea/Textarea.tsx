import React, { memo, type TextareaHTMLAttributes, useRef } from 'react';

import { classNames, type Mods } from '@/shared/lib/classNames/classNames';

import cls from './Textarea.module.scss';
import { useAppEffect } from '@/shared/lib/hooks/useAppEffect/useAppEffect';

type HTMLTextareaProps = Omit<
	TextareaHTMLAttributes<HTMLTextAreaElement>,
	'value' | 'onChange' | 'readOnly'
>;

type TextareaVariant = 'normal' | 'outlined';

interface TextareaProps extends HTMLTextareaProps {
	className?: string;
	variant?: TextareaVariant;
	value?: string | number;
	onChange?: (value: string) => void;
	autofocus?: boolean;
	readonly?: boolean;
}

export const Textarea = memo((props: TextareaProps) => {
	const {
		className,
		variant = 'normal',
		value,
		onChange,
		placeholder,
		autofocus,
		readonly,
		...otherProps
	} = props;

	const ref = useRef<HTMLTextAreaElement>(null);

	useAppEffect(() => {
		if (autofocus) {
			ref?.current?.focus();
		}
	}, [autofocus]);

	const onChangeHandler = (
		e: React.ChangeEvent<HTMLTextAreaElement>,
	): void => {
		onChange?.(e.target.value);
	};

	const mods: Mods = {
		[cls.readonly]: readonly,
	};

	return (
		<div
			className={classNames(cls.TextareaWrapper, mods, [
				className,
				cls[variant],
			])}
		>
			<textarea
				ref={ref}
				value={value}
				onChange={onChangeHandler}
				className={cls.textarea}
				readOnly={readonly}
				{...otherProps}
			/>
		</div>
	);
});
