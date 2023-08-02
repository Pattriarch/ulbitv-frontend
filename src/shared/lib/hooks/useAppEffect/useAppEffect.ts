import { useEffect } from 'react';

export const useAppEffect = (
	callback: (...args: any[]) => void,
	dependencies: any[],
) => {
	useEffect(() => {
		if (__PROJECT__ !== 'storybook' && __PROJECT__ !== 'jest') {
			callback();
		}
	}, dependencies);
};
