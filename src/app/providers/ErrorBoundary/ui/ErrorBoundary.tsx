import React, { type ErrorInfo, type ReactNode, Suspense } from 'react';

import { PageError } from '@/widgets/PageError';

interface ErrorBoundaryProps {
	/* Дочерние элементы, которые будут обернуты в предохранитель */
	children: ReactNode;
}

interface ErrorBoundaryState {
	/* Флаг, указывающий, произошла ли ошибка в дочерних элементах. */
	hasError: boolean;
}

/**
 * Компонент `ErrorBoundary` служит для перехвата ошибок в дереве компонентов React и их отображения
 * в пользовательском интерфейсе. Это позволяет предотвратить "падение" всего приложения в случае ошибки
 * в одном из компонентов и предоставить пользователю более дружелюбное сообщение об ошибке.
 *
 * @component
 * @example
 * <ErrorBoundary>
 *     <MyComponent />
 * </ErrorBoundary>
 *
 * @param {ReactNode} children - Компоненты-потомки, которые ErrorBoundary будет оборачивать.
 * @returns {React.ReactNode} Возвращает потомков в случае отсутствия ошибки или пользовательский интерфейс ошибки, если ошибка произошла.
 */
class ErrorBoundary extends React.Component<
	ErrorBoundaryProps,
	ErrorBoundaryState
> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: Error): ErrorBoundaryState {
		return { hasError: true };
	}

	// eslint-disable-next-line
	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.log(error, errorInfo);
	}

	render(): React.ReactNode {
		const { hasError } = this.state;
		if (hasError) {
			return (
				<Suspense fallback={''}>
					<PageError />
				</Suspense>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
