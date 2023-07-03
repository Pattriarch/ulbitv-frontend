import { classNames, type Mods } from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';
import React, { type ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { Portal } from 'shared/ui/Portal/Portal';

interface ModalProps {
	className?: string;
	children?: ReactNode;
	isOpen: boolean;
	onClose?: () => void;
	lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps): JSX.Element | null => {
    const {
        className,
        children,
        isOpen,
        onClose,
        lazy
    } = props;

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

    const closeHandler = useCallback((): void => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent): void => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const onContentClick = (e: React.MouseEvent): void => {
        e.stopPropagation();
    };

    if (lazy && !isMounted) {
        return null;
    }

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing
    };

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
