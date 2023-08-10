import { useEffect } from 'react';

export function useAppEffect (
	callback: (...args: any[]) => void,
	dependencies: any[],
) {
	useEffect(() => {
		if (__PROJECT__ !== 'storybook' && __PROJECT__ !== 'jest') {
			callback();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, dependencies);
}
