// Декларации модулей для CSS и SCSS файлов.
declare module '*.module.css';
declare module '*.module.scss';

// Декларации модулей для файлов изображений.
declare module '*.jpg';
declare module '*.jpeg';

// Декларация модуля для SVG файлов, которая позволяет импортировать SVG как React компонент.
declare module '*.svg' {
	import type React from 'react';

	const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
	export default SVG;
}

// Глобальные константы, определенные в проекте.
declare const __IS_DEV__: boolean;
declare const __API__: string;
declare const __PROJECT__: 'storybook' | 'frontend' | 'jest';  // Тип проекта.

// Тип для глубокой частичной типизации объекта.
type DeepPartial<T> = T extends object
	? {
			[P in keyof T]?: DeepPartial<T[P]>;
	  }
	: T;

// Тип для записи с необязательными ключами.
type OptionalRecord<K extends keyof any, T> = {
	[P in K]?: T;
};

// Расширение JSX для кастомного элемента "tag".
declare global {
	namespace JSX {
		interface IntrinsicElements {
			tag: React.DetailedHTMLProps<
				React.HTMLAttributes<HTMLElement>,
				HTMLElement
			>;
		}
	}
}
