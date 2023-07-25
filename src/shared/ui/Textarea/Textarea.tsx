import React, {
	memo,
	type TextareaHTMLAttributes,
	useEffect,
	useRef,
	useState,
} from 'react';

import { classNames, type Mods } from '@/shared/lib/classNames/classNames';

import cls from './Textarea.module.scss';

type HTMLTextareaProps = Omit<
	TextareaHTMLAttributes<HTMLTextAreaElement>,
	'value' | 'onChange' | 'readOnly'
>;

type InputTheme = 'normal' | 'outlined';

interface TextareaProps extends HTMLTextareaProps {
	className?: string;
	theme?: InputTheme;
	value?: string | number;
	onChange?: (value: string) => void;
	autofocus?: boolean;
	readonly?: boolean;
}

export const Textarea = memo((props: TextareaProps) => {
	const {
		className,
		theme = 'normal',
		value,
		onChange,
		placeholder,
		autofocus,
		readonly,
		...otherProps
	} = props;

	const ref = useRef<HTMLTextAreaElement>(null);
	const [isFocused, setIsFocused] = useState(false);
	const [caretPosition, setCaretPosition] = useState(0);

	const isCaretVisible = isFocused && !readonly;

	useEffect(() => {
		if (autofocus) {
			setIsFocused(true);
			ref?.current?.focus();
		}
	}, [autofocus]);

	const onChangeHandler = (
		e: React.ChangeEvent<HTMLTextAreaElement>,
	): void => {
		onChange?.(e.target.value);
		setCaretPosition(e.target.value.length);
	};

	const onBlur = (): void => {
		setIsFocused(false);
	};

	const onFocus = (): void => {
		setIsFocused(true);
	};

	const onSelect = (e: any): void => {
		setCaretPosition(e?.target?.selectionStart || 0);
	};

	const mods: Mods = {
		[cls.readonly]: readonly,
	};

	return (
		<div
			className={classNames(cls.TextareaWrapper, mods, [
				className,
				cls[theme],
			])}
		>
			<div className={cls.caretWrapper}>
				<textarea
					ref={ref}
					value={value}
					onChange={onChangeHandler}
					className={cls.textarea}
					onFocus={onFocus}
					onBlur={onBlur}
					onSelect={onSelect}
					readOnly={readonly}
					{...otherProps}
				/>
				{isCaretVisible && (
					<span
						className={cls.caret}
						style={{ left: `${caretPosition * 9}px` }}
					/>
				)}
			</div>
		</div>
	);
});
