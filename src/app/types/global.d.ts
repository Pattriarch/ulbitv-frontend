declare module '*.module.css';
declare module '*.module.scss';

declare module '*.jpg';
declare module '*.jpeg';

declare module '*.svg' {
	import type React from 'react';

	const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
	export default SVG;
}

declare const __IS_DEV__: boolean;
declare const __API__: string;
declare const __PROJECT__: 'storybook' | 'frontend' | 'jest';

type DeepPartial<T> = T extends object ? {
	[P in keyof T]?: DeepPartial<T[P]>;
} : T;

type OptionalRecord<K extends keyof any, T> = {
	[P in K]?: T;
};

declare global {
	namespace JSX {
		interface IntrinsicElements {
			tag: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
		}
	}
}
