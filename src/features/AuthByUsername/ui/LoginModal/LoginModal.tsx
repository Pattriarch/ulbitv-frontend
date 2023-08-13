import { Suspense } from 'react';

import { LoginFormAsync } from '../LoginForm/LoginForm.async';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/deprecated/Loader';
import { Modal } from '@/shared/ui/redesigned/Modal';

interface LoginModalProps {
	/**
	 * Дополнительные стили компонента.
	 */
	className?: string;

	/**
	 * Состояние модального окна: открыто или закрыто.
	 */
	isOpen: boolean;

	/**
	 * Callback-функция, вызываемая при закрытии модального окна.
	 * @callback onClose
	 * @returns {void}
	 */
	onClose: () => void;
}

/**
 * Компонент LoginModal - модальное окно авторизации.
 *
 * @component
 *
 * @param {Object} props - Пропсы компонента.
 * @param {string} props.className - Дополнительные стили компонента.
 * @param {boolean} props.isOpen - Флаг открытия/закрытия модального окна.
 * @param {Function} props.onClose - Callback-функция для закрытия модального окна.
 * @returns {JSX.Element} - Возвращает JSX элемент модального окна авторизации.
 */
export const LoginModal = (props: LoginModalProps): JSX.Element => {
	const { className, isOpen, onClose } = props;

	return (
		<Modal
			className={classNames('', {}, [className])}
			isOpen={isOpen}
			onClose={onClose}
			lazy
		>
			<Suspense fallback={<Loader />}>
				<LoginFormAsync onSuccess={onClose} />
			</Suspense>
		</Modal>
	);
};
