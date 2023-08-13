import { memo, type ReactNode, useCallback } from 'react';

import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal';

import { classNames } from '@/shared/lib/classNames/classNames';
import {
	AnimationProvider,
	useAnimationLibs,
} from '@/shared/lib/components/AnimationProvider';
import { toggleFeatures } from '@/shared/lib/features';
import { useAppEffect } from '@/shared/lib/hooks/useAppEffect/useAppEffect';

import cls from './Drawer.module.scss';

/**
 * Свойства компонента Drawer.
 *
 * @interface
 * @property {string} [className] - Дополнительные стили компонента.
 * @property {ReactNode} children - Содержимое, которое будет отображаться внутри компонента.
 * @property {boolean} [isOpen] - Флаг, указывающий, открыт ли компонент (Drawer).
 * @property {() => void} [onClose] - Callback-функция, вызываемая при закрытии компонента.
 */
interface DrawerProps {
	className?: string;
	children?: ReactNode;
	isOpen?: boolean;
	onClose?: () => void;
}

const height = window.innerHeight - 100;

/**
 * Компонент контента для Drawer с анимацией и возможностью закрытия.
 *
 * @component
 * @param {DrawerProps} props - Свойства компонента.
 * @returns {JSX.Element | null} Компонент DrawerContent или null, если не открыт.
 */
export const DrawerContent = memo((props: DrawerProps) => {
	const { Spring, Gesture } = useAnimationLibs();
	const [{ y }, api] = Spring.useSpring(() => ({ y: height }));
	const { className, children, isOpen, onClose } = props;

	const openDrawer = useCallback(() => {
		api.start({ y: 0, immediate: false });
	}, [api]);

	useAppEffect(() => {
		if (isOpen) {
			openDrawer();
		}
	}, [api, isOpen, openDrawer]);

	const close = (velocity = 0) => {
		api.start({
			y: height,
			immediate: false,
			config: { ...Spring.config.stiff, velocity },
			onResolve: onClose,
		});
	};

	const bind = Gesture.useDrag(
		({
			last,
			velocity: [, vy],
			direction: [, dy],
			movement: [, my],
			cancel,
		}) => {
			if (my < -70) cancel();

			if (last) {
				if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
					close();
				} else {
					openDrawer();
				}
			} else {
				api.start({ y: my, immediate: true });
			}
		},
		{
			from: () => [0, y.get()],
			filterTaps: true,
			bounds: { top: 0 },
			rubberband: true,
		},
	);

	if (!isOpen) {
		return null;
	}

	const display = y.to((py) => (py < height ? 'block' : 'none'));

	return (
		<Portal element={document.getElementById('app') ?? document.body}>
			<div
				className={classNames(cls.Drawer, {}, [
					className,
					toggleFeatures({
						name: 'isAppRedesigned',
						on: () => cls.drawerNew,
						off: () => cls.drawerOld,
					}),
				])}
			>
				<Overlay onClick={close} />
				<Spring.a.div
					className={cls.sheet}
					style={{
						display,
						bottom: `calc(-100vh + ${height - 100}px)`,
						y,
					}}
					{...bind()}
				>
					{children}
				</Spring.a.div>
			</div>
		</Portal>
	);
});

/**
 * Компонент Drawer с асинхронной загрузкой и анимацией.
 *
 * @param {DrawerProps} props - Свойства компонента.
 * @returns {JSX.Element | null} Компонент DrawerAsync или null, если не загружен.
 */
const DrawerAsync = (props: DrawerProps) => {
	const { isLoaded } = useAnimationLibs();

	return isLoaded ? <DrawerContent {...props} /> : null;
};

/**
 * Компонент Drawer с анимацией и возможностью закрытия.
 *
 * @param {DrawerProps} props - Свойства компонента.
 * @returns {JSX.Element} Компонент Drawer.
 */
export const Drawer = (props: DrawerProps) => {
	return (
		<AnimationProvider>
			<DrawerAsync {...props} />
		</AnimationProvider>
	);
};
