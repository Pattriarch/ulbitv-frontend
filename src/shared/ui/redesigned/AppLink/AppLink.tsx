import React, { forwardRef, memo, type ReactNode } from 'react';
import { type LinkProps, NavLink } from 'react-router-dom';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './AppLink.module.scss';

export type AppLinkVariant = 'primary' | 'red';

/**
 * Свойства компонента AppLink.
 *
 * @interface
 * @property {string} [className] - Дополнительные стили компонента.
 * @property {AppLinkVariant} [variant] - Вариант стиля ссылки.
 * @property {ReactNode} [children] - Содержимое ссылки.
 * @property {string} [activeClassName] - CSS-класс, применяемый к компоненту, когда ссылка активна.
 */
interface AppLinkProps extends LinkProps {
	className?: string;
	variant?: AppLinkVariant;
	children?: ReactNode;
	activeClassName?: string;
}

/**
 * Компонент для создания ссылок в приложении с поддержкой активного состояния.
 *
 * @component
 * @param {AppLinkProps} props - Свойства компонента.
 * @param {React.Ref<HTMLAnchorElement>} ref - Ref для ссылки.
 * @returns {JSX.Element} Компонент AppLink.
 */
export const AppLink = memo(
	forwardRef<HTMLAnchorElement, AppLinkProps>((props: AppLinkProps, ref) => {
		const {
			to,
			className,
			children,
			variant = 'primary',
			activeClassName = '',
			...otherProps
		} = props;

		return (
			<NavLink
				to={to}
				className={({ isActive }) =>
					classNames(cls.AppLink, { [activeClassName]: isActive }, [
						className,
						cls[variant],
					])
				}
				ref={ref}
				{...otherProps}
			>
				{children}
			</NavLink>
		);
	}),
);
