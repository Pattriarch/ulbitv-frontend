import { useCallback, useRef } from "react";

/**
 * Хук, позволяющий отменить предыдущий вызов функции пока не истечет delay
 * @param callback
 * @param delay
 */
export function useDebounce(callback: (...args: any[]) => void, delay: number) {
  const timer = useRef<any>();

  return useCallback(
    (...args: any[]) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        // eslint-disable-next-line n/no-callback-literal
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );
}
