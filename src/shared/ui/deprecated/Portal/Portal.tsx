import { type ReactNode, type ReactPortal } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
	children: ReactNode;
	element?: HTMLElement;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Portal = (props: PortalProps): ReactPortal => {
	const { children, element = document.body } = props;
	return createPortal(children, element);
};
