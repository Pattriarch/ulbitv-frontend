import React, {
	memo,
	type TextareaHTMLAttributes,
	useEffect,
	useRef,
} from 'react';

import { classNames, type Mods } from '@/shared/lib/classNames/classNames';

import cls from './Textarea.module.scss';
import { useAppEffect } from '@/shared/lib/hooks/useAppEffect/useAppEffect';

type HTMLTextareaProps = Omit<
	TextareaHTMLAttributes<HTMLTextAreaElement>,
	'value' | 'onChange' | 'readOnly'
>;

type TextareaTheme = 'normal' | 'outlined';

interface TextareaProps extends HTMLTextareaProps {
	className?: string;
	theme?: TextareaTheme;
	value?: string | number;
	onChange?: (value: string) => void;
	autofocus?: boolean;
	readonly?: boolean;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
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
				cls[theme],
			])}
		>
			<div className={cls.caretWrapper}>
				<textarea
					ref={ref}
					value={value}
					onChange={onChangeHandler}
					className={cls.textarea}
					readOnly={readonly}
					{...otherProps}
				/>
			</div>
		</div>
	);
});
