import { useCallback, useRef } from 'react';

export function useThrottle(callback: (...args: any[]) => void, delay: number) {
    // можно вызывать коллбэк или нельзя
    const throttleRef = useRef(false);
    return useCallback((...args) => {
	    if (!throttleRef.current) {
		    // eslint-disable-next-line n/no-callback-literal
		    callback(...args);
		    throttleRef.current = true;

		    setTimeout(() => {
			    throttleRef.current = false;
		    }, delay);
	    }
    }, [callback, delay]);
}
