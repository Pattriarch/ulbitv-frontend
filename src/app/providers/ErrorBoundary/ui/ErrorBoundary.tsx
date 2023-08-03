import React, { type ErrorInfo, type ReactNode, Suspense } from 'react';

import { PageError } from '@/widgets/PageError';

interface ErrorBoundaryProps {
	children: ReactNode;
}

interface ErrorBoundaryState {
	hasError: boolean;
}

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
