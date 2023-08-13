import React, { type ReactNode } from 'react';

import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';

import { classNames, type Mods } from '@/shared/lib/classNames/classNames';
import { toggleFeatures } from '@/shared/lib/features';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';

import cls from './Modal.module.scss';

/**
 * Свойства компонента Modal.
 *
 * @interface
 * @property {string} [className] - Дополнительные стили компонента.
 * @property {ReactNode} [children] - Дочерние элементы, которые будут отображаться внутри модального окна.
 * @property {boolean} isOpen - Флаг, указывающий, открыто ли модальное окно.
 * @property {() => void} [onClose] - Callback-функция, вызываемая при закрытии модального окна.
 * @property {boolean} [lazy] - Флаг, указывающий, использовать ли ленивую загрузку содержимого модального окна.
 */
interface ModalProps {
	className?: string;
	children?: ReactNode;
	isOpen: boolean;
	onClose?: () => void;
	lazy?: boolean;
}

/**
 * Компонент для создания модальных окон с поддержкой ленивой загрузки и анимацией.
 *
 * @component
 * @param {ModalProps} props - Свойства компонента.
 * @returns {JSX.Element | null} Компонент Modal.
 */
export const Modal = (props: ModalProps): JSX.Element | null => {
	const { className, children, isOpen, onClose, lazy } = props;

	const { isMounted, isClosing, close } = useModal({
		animationDelay: 300,
		onClose,
		isOpen,
	});

	if (lazy && !isMounted) {
		return null;
	}

	const mods: Mods = {
		[cls.opened]: isOpen,
		[cls.isClosing]: isClosing,
	};

	return (
		<Portal element={document.getElementById('app') ?? document.body}>
			<div
				className={classNames(cls.Modal, mods, [
					className,
					toggleFeatures({
						name: 'isAppRedesigned',
						on: () => cls.modalNew,
						off: () => cls.modalOld,
					}),
				])}
			>
				<Overlay onClick={close} />
				<div className={cls.content}>{children}</div>
			</div>
		</Portal>
	);
};
