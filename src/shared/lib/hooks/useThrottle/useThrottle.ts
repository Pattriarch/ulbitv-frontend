import { useCallback, useEffect, useRef } from 'react';

export function useThrottle(callback: (...args: any[]) => void, delay: number) {
	// можно вызывать коллбэк или нельзя
	const throttleRef = useRef(false);
	const timerRef = useRef<NodeJS.Timeout | null>(null);

	const throttleCallback = useCallback(
		(...args: any[]) => {
			if (!throttleRef.current) {
				// eslint-disable-next-line n/no-callback-literal
				callback(...args);
				throttleRef.current = true;

				timerRef.current = setTimeout(() => {
					throttleRef.current = false;
				}, delay);
			}
		},
		[callback, delay],
	);

	useEffect(() => {
		return () => {
			if (timerRef.current) {
				clearTimeout(timerRef.current);
			}
		};
	}, []);

	return throttleCallback;
}
