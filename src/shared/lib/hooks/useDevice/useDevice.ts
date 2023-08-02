import { useEffect, useState } from 'react';
import { useAppEffect } from '@/shared/lib/hooks/useAppEffect/useAppEffect';

export function useDevice() {
	const [isMobile, setIsMobile] = useState(false);

	useAppEffect(() => {
		const handleResize = () =>
			setIsMobile(window.matchMedia('(pointer:coarse)').matches);

		handleResize();
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize); // удаляем обработчик
	}, []);

	return isMobile;
}
