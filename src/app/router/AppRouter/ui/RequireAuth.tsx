import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { getUserAuthData, getUserRoles, type UserRole } from '@/entities/User';
import { getRouteForbidden, getRouteMain } from '@/shared/const/router';

interface RequireAuthProps {
	/**
	 * Дочерний элемент, который будет отображаться,
	 * если условия аутентификации выполнены.
	 */
	children: JSX.Element;

	/**
	 * Массив ролей пользователя, которым разрешен доступ к дочернему элементу.
	 * Если роли не указаны, ограничений на доступ нет.
	 */
	roles?: UserRole[];
}

/**
 * Компонент `RequireAuth` предназначен для проверки аутентификации и ролей пользователя.
 * Если пользователь не аутентифицирован, он будет перенаправлен на главную страницу.
 * Если у пользователя нет необходимой роли для доступа к содержимому, он будет перенаправлен на страницу с запретом на доступ.
 *
 * Можно также указать определенные роли, которые требуются для доступа к содержимому, используя свойство `roles`.
 *
 * @component
 * @example
 * <RequireAuth roles={['admin', 'user']}>
 *     <ProtectedComponent />
 * </RequireAuth>
 *
 * @param {JSX.Element} children - Компонент или элементы, которые нужно обернуть.
 * @param {UserRole[]} [roles] - Опциональный список ролей, которые требуются для доступа к содержимому.
 * @returns {JSX.Element} Возвращает дочерние элементы, если у пользователя есть доступ, иначе перенаправляет на соответствующую страницу.
 */
export function RequireAuth({ children, roles }: RequireAuthProps) {
	const auth = useSelector(getUserAuthData);
	const location = useLocation();
	const userRoles = useSelector(getUserRoles);

	const hasRequiredRoles = useMemo(() => {
		if (!roles) {
			return true;
		}

		return roles.some((requiredRole) => {
			return userRoles?.includes(requiredRole);
		});
	}, [roles, userRoles]);

	if (!auth) {
		return (
			<Navigate to={getRouteMain()} state={{ from: location }} replace />
		);
	}

	if (!hasRequiredRoles) {
		return (
			<Navigate
				to={getRouteForbidden()}
				state={{ from: location }}
				replace
			/>
		);
	}

	return children;
}
