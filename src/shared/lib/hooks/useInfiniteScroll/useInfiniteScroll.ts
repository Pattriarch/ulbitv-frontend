import { type MutableRefObject, useEffect } from 'react';
import { useAppEffect } from '@/shared/lib/hooks/useAppEffect/useAppEffect';

export interface UseInfiniteScrollOptions {
	callback?: () => void;
	triggerRef: MutableRefObject<HTMLElement>;
	wrapperRef?: MutableRefObject<HTMLElement>;
}

export function useInfiniteScroll(props: UseInfiniteScrollOptions) {
	const { callback, triggerRef, wrapperRef } = props;

	useAppEffect(() => {
		let observer: IntersectionObserver | null = null;

		const wrapperElement = wrapperRef?.current || null;
		const triggerElement = triggerRef.current;

		if (callback) {
			const options = {
				root: wrapperElement,
				rootMargin: '0px',
				threshold: 1.0,
			};

			observer = new IntersectionObserver(([entry]) => {
				if (entry.isIntersecting) {
					callback();
				}
			}, options);

			observer.observe(triggerElement);
		}

		return () => {
			if (observer && triggerElement) {
				// eslint-disable-next-line react-hooks/exhaustive-deps
				observer.unobserve(triggerElement);
			}
		};
	}, [callback, triggerRef, wrapperRef]);
}
