import React, {
	type InputHTMLAttributes,
	memo,
	ReactNode,
	useEffect,
	useRef,
	useState,
} from 'react';

import { classNames, type Mods } from '@/shared/lib/classNames/classNames';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'value' | 'onChange' | 'readOnly'
>;

type InputTheme = 'normal' | 'outlined';

interface InputProps extends HTMLInputProps {
	className?: string;
	theme?: InputTheme;
	value?: string | number;
	onChange?: (value: string) => void;
	autofocus?: boolean;
	readonly?: boolean;
	addonLeft?: ReactNode;
	addonRight?: ReactNode;
}

export const Input = memo((props: InputProps): JSX.Element => {
	const {
		className,
		theme = 'normal',
		value,
		onChange,
		type = 'text',
		placeholder,
		autofocus,
		readonly,
		addonLeft,
		addonRight,
		...otherProps
	} = props;

	const ref = useRef<HTMLInputElement>(null);
	const [isFocused, setIsFocused] = useState(false);

	useEffect(() => {
		if (autofocus) {
			setIsFocused(true);
			ref?.current?.focus();
		}
	}, [autofocus]);

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
		onChange?.(e.target.value);
	};

	const onBlur = (): void => {
		setIsFocused(false);
	};

	const onFocus = (): void => {
		setIsFocused(true);
	};

	const mods: Mods = {
		[cls.readonly]: readonly,
		[cls.focused]: isFocused,
		[cls.withAddonLeft]: Boolean(addonLeft),
		[cls.withAddonRight]: Boolean(addonRight),
	};

	return (
		<div
			className={classNames(cls.InputWrapper, mods, [
				className,
				cls[theme],
			])}
		>
			<div className={cls.addonLeft}>{addonLeft}</div>
			<input
				ref={ref}
				type={type}
				value={value}
				onChange={onChangeHandler}
				className={cls.input}
				onFocus={onFocus}
				onBlur={onBlur}
				placeholder={placeholder}
				readOnly={readonly}
				{...otherProps}
			/>
			<div className={cls.addonRight}>{addonRight}</div>
		</div>
	);
});
