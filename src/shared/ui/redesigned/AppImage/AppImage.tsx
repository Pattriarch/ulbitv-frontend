import {
	ImgHTMLAttributes,
	memo,
	ReactElement,
	useLayoutEffect,
	useState,
} from 'react';

/**
 * Свойства компонента AppImage.
 *
 * @interface
 * @property {string} [className] - Дополнительные стили компонента.
 * @property {ReactElement} [fallback] - Элемент, который будет отображен, если изображение не загрузилось.
 * @property {ReactElement} [errorFallback] - Элемент, который будет отображен, если произошла ошибка при загрузке изображения.
 */
interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
	className?: string;
	fallback?: ReactElement;
	errorFallback?: ReactElement;
}

/**
 * Компонент для отображения изображения с возможностью предоставления альтернативного контента и обработки ошибок загрузки.
 *
 * @component
 * @param {AppImageProps} props - Свойства компонента.
 * @returns {JSX.Element} Компонент AppImage.
 */
export const AppImage = memo((props: AppImageProps) => {
	const {
		className,
		src,
		alt = 'image',
		fallback,
		errorFallback,
		...otherProps
	} = props;
	const [isLoading, setIsLoading] = useState(true);
	const [hasError, setHasError] = useState(false);

	useLayoutEffect(() => {
		const img = new Image();
		img.src = src ?? '';
		img.onload = () => {
			setIsLoading(false);
		};
		img.onerror = () => {
			setIsLoading(false);
			setHasError(true);
		};
	}, [src]);

	if (isLoading && fallback) {
		return fallback;
	}

	if (hasError && errorFallback) {
		return errorFallback;
	}

	return <img className={className} src={src} alt={alt} {...otherProps} />;
});
