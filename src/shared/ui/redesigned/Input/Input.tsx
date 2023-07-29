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
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

type HTMLInputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'value' | 'onChange' | 'readOnly' | 'size'
>;

type InputTheme = 'normal' | 'outlined';

type InputSize = 's' | 'm' | 'l';

interface InputProps extends HTMLInputProps {
	className?: string;
	theme?: InputTheme;
	size?: InputSize;
	value?: string | number;
	label?: string;
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
		label,
		size = 'm',
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

	const input = (
		<div
			className={classNames(cls.InputWrapper, mods, [
				className,
				cls[theme],
				cls[size],
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

	if (label) {
		return (
			<HStack max gap={'8'}>
				<Text text={label} />
				{input}
			</HStack>
		);
	}

	return input;
});