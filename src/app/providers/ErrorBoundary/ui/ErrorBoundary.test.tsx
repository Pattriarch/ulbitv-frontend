import { render } from '@testing-library/react';

import ErrorBoundary from './ErrorBoundary';

const Child = () => {
	throw new Error();
};

const renderProviders = (ui: React.ReactElement) => render(ui, {});

describe('app/providers/ErrorBoundary', () => {
	it(`Render ErrorBoundary when error throws`, () => {
		const container = renderProviders(
			<ErrorBoundary>
				<Child />
			</ErrorBoundary>,
		);
		expect(container).toBeDefined();
	});
});
