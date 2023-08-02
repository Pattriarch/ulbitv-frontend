import { useCallback, useEffect, useRef, useState } from 'react';
import { useAppEffect } from '@/shared/lib/hooks/useAppEffect/useAppEffect';

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

	useAppEffect(() => {
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

	useAppEffect(() => {
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
