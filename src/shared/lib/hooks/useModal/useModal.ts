import { useCallback, useEffect, useRef, useState } from 'react';

interface UseModalProps {
	isOpen?: boolean;
	onClose?: () => void;
	animationDelay: number;
}

/**
 * Переиспользуемый хук для модальных компонентов (Drawer/Modal)
 * @param props
 */
export function useModal(props: UseModalProps) {
	const { isOpen, onClose, animationDelay } = props;

	const [isClosing, setIsClosing] = useState(false);
	const [isMounted, setIsMounted] = useState(false);
	const timerRef = useRef<ReturnType<typeof setTimeout>>();

	useEffect(() => {
		if (isOpen) {
			setIsMounted(true);
		}
		// чтобы фокус не терялся при открытии модалки снова
		return () => setIsMounted(false);
	}, [isOpen]);

	const close = useCallback((): void => {
		if (onClose) {
			setIsClosing(true);
			timerRef.current = setTimeout(() => {
				onClose();
				setIsClosing(false);
			}, animationDelay);
		}
	}, [animationDelay, onClose]);

	const onKeyDown = useCallback(
		(e: KeyboardEvent): void => {
			if (e.key === 'Escape') {
				close();
			}
		},
		[close],
	);

	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', onKeyDown);
		}

		return () => {
			clearTimeout(timerRef.current);
			window.removeEventListener('keydown', onKeyDown);
		};
	}, [isOpen, onKeyDown]);

	return {
		isClosing,
		isMounted,
		close,
	};
}
