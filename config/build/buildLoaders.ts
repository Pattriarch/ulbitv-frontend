import type webpack from 'webpack';

import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { type BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
	const { isDev } = options;

	const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
	const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true });

	const fileLoader = {
		test: /\.(png|jpe?g|gif|woff2|woff)$/i,
		use: [
			{
				loader: 'file-loader'
			}
		]
	};

	const svgLoader = buildSvgLoader();

	const cssLoader = buildCssLoader(isDev);

	return [
		fileLoader,
		svgLoader,
		codeBabelLoader,
		tsxCodeBabelLoader,
		cssLoader
	];
}
