import React, { type ButtonHTMLAttributes, memo, type ReactNode } from "react";

import { classNames, type Mods } from "@/shared/lib/classNames/classNames";

import cls from "./Button.module.scss";

export enum ButtonTheme {
  CLEAR = "clear", // без рамок, заднего фона
  CLEAR_INVERTED = "clearInverted",
  OUTLINE = "outline",
  OUTLINE_RED = "outlineRed",
  BACKGROUND = "background", // текст кнопки, как на фоне
  BACKGROUND_INVERTED = "backgroundInverted",
}

export enum ButtonSize {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  /**
   * Тема кнопки. Отвечает за визуал (в рамке, без стилей, инвертированной теме приложения)
   */
  theme?: ButtonTheme;
  /**
   * Флаг, делающий кнопку квадратной
   */
  square?: boolean;
  /**
   * Размер кнопки по дизайн системе
   */
  size?: ButtonSize;
  /**
   * Флаг, отвечающий за работу кнопку
   */
  disabled?: boolean;
  /**
   * Флаг, отвечающий за установление кнопки на всю свободную ширину
   */
  fullWidth?: boolean;
  /**
   * Содержимое кнопки
   */
  children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    theme = ButtonTheme.OUTLINE,
    square = false,
    size = ButtonSize.M,
    disabled,
    fullWidth,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.square]: square,
    [cls.disabled]: disabled ?? false,
    [cls.fullWidth]: fullWidth,
  };

  return (
    <button
      type={"button"}
      className={classNames(cls.Button, mods, [
        className,
        cls[theme],
        cls[size],
        cls[theme],
      ])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});
