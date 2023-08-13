import { type ReactNode, type ReactPortal } from 'react';
import { createPortal } from 'react-dom';

/**
 * Свойства компонента Portal.
 *
 * @interface
 * @property {ReactNode} children - Дочерние элементы, которые будут рендериться в портале.
 * @property {HTMLElement} [element] - HTML-элемент, в который будет монтироваться портал.
 */
interface PortalProps {
	children: ReactNode;
	element?: HTMLElement;
}

/**
 * Компонент для создания портала, позволяющего рендерить дочерние элементы вне иерархии React-компонентов.
 *
 * @component
 * @param {PortalProps} props - Свойства компонента.
 * @returns {ReactPortal} Компонент Portal.
 */
export const Portal = (props: PortalProps): ReactPortal => {
	const { children, element = document.body } = props;
	return createPortal(children, element);
};
