import { classNames, type Mods } from 'shared/lib/classNames/classNames';
import cls from './Drawer.module.scss';
import { memo, type ReactNode } from 'react';
import { Portal } from '@headlessui/react';
import { Overlay } from '../Overlay/Overlay';

interface DrawerProps {
	className?: string;
	children?: ReactNode;
	isOpen?: boolean;
	onClose?: () => void;
}

export const Drawer = memo((props: DrawerProps) => {
	const {
		className,
		children,
		isOpen,
		onClose
	} = props;

	const mods: Mods = {
		[cls.opened]: isOpen
	};

	return (
		<Portal>
			<div className={classNames(cls.Drawer, mods, [className])}>
				<Overlay onClick={onClose} />
				<div
					className={cls.content}
				>
					{children}
				</div>
			</div>
		</Portal>
	);
});
