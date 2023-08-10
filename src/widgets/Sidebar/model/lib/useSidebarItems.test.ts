import { renderHook } from '@testing-library/react';
import { useSelector } from 'react-redux';

import { useSidebarItems } from './useSidebarItems';

jest.mock('react-redux', () => ({
	...jest.requireActual('react-redux'),
	useSelector: jest.fn(),
}));

describe('useSidebarItems', () => {
	it('should return 4 items for authorised user', () => {
		(useSelector as jest.Mock).mockImplementation(() => ({
			id: '1',
			username: 'test',
		}));

		const { result } = renderHook(() => useSidebarItems());
		expect(result.current).toHaveLength(4);
	});

	it('should return 2 items for authorised user', () => {
		(useSelector as jest.Mock).mockImplementation(() => undefined);

		const { result } = renderHook(() => useSidebarItems());
		expect(result.current).toHaveLength(2);
	});
});
