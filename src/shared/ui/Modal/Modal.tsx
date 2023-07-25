import React, { type ReactNode } from "react";

import { Overlay } from "../Overlay/Overlay";
import { Portal } from "../Portal/Portal";

import { classNames, type Mods } from "@/shared/lib/classNames/classNames";
import { useModal } from "@/shared/lib/hooks/useModal/useModal";

import cls from "./Modal.module.scss";

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

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
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <Overlay onClick={close} />
        <div className={cls.overlay} onClick={close}>
          <div className={cls.content}>{children}</div>
        </div>
      </div>
    </Portal>
  );
};
