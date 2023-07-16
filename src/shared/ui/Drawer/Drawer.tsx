import { classNames, type Mods } from 'shared/lib/classNames/classNames';
import cls from './Drawer.module.scss';
import { memo, type ReactNode } from 'react';
import { Portal } from '@headlessui/react';
import { Overlay } from '../Overlay/Overlay';
import { useModal } from 'shared/lib/hooks/useModal/useModal';

interface DrawerProps {
	className?: string;
	children?: ReactNode;
	isOpen?: boolean;
	onClose?: () => void;
	lazy?: boolean;
}

export const Drawer = memo((props: DrawerProps) => {
	const {
		className,
		children,
		isOpen,
		onClose,
		lazy
	} = props;

	const {
		isMounted,
		isClosing,
		close
	} = useModal({
		animationDelay: 300,
		onClose,
		isOpen
	});

	const mods: Mods = {
		[cls.opened]: isOpen,
		[cls.isClosing]: isClosing
	};

	if (lazy && !isMounted) {
		return null;
	}

	return (
		<Portal>
			<div className={classNames(cls.Drawer, mods, [className])}>
				<Overlay onClick={close} />
				<div
					className={cls.content}
				>
					{children}
				</div>
			</div>
		</Portal>
	);
});
