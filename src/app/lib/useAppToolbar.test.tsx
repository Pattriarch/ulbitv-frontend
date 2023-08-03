import { render } from '@testing-library/react';

import { useAppToolbar } from './useAppToolbar';

import { AppRoutes } from '@/shared/const/router';
import { useRouteChange } from '@/shared/lib/route/useRouteChange';
import { ScrollToolbar } from '@/widgets/ScrollToolbar';

jest.mock('@/shared/lib/route/useRouteChange');

describe('app/lib/useAppToolbar', () => {
	let result: any;
	const TestComponent = () => {
		result = useAppToolbar();
		return null;
	};

	beforeEach(() => {
		result = null;
	});

	it('should return ScrollToolbar for ARTICLES route', () => {
		(useRouteChange as jest.Mock).mockReturnValue(AppRoutes.ARTICLES);
		render(<TestComponent />);

		expect(result.type).toBe(ScrollToolbar);
	});

	it('should return ScrollToolbar for ARTICLE_DETAILS route', () => {
		(useRouteChange as jest.Mock).mockReturnValue(AppRoutes.ARTICLE_DETAILS);
		render(<TestComponent />);

		expect(result.type).toBe(ScrollToolbar);
	});

	it('should return undefined for unsuitable route', () => {
		(useRouteChange as jest.Mock).mockReturnValue(AppRoutes.PROFILE);
		render(<TestComponent />);

		expect(result).toBeUndefined();
	});

	it('should return undefined for unknown route', () => {
		(useRouteChange as jest.Mock).mockReturnValue('UNKNOWN_ROUTE');
		render(<TestComponent />);

		expect(result).toBeUndefined();
	});
});
