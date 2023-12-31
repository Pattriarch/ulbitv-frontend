import path from 'path';

import type webpack from 'webpack';
import { DefinePlugin } from 'webpack';

import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { type BuildPaths } from '../build/types/config';

export default ({
	config,
}: {
	config: webpack.Configuration,
}): webpack.Configuration => {
	const paths: BuildPaths = {
		build: '',
		html: '',
		entry: '',
		src: path.resolve(__dirname, '..', '..', 'src'),
		locales: '',
		buildLocales: '',
	};

	config.resolve?.modules?.push(paths.src);
	config.resolve?.extensions?.push('.ts', '.tsx');

	if (config?.resolve?.alias) {
		config.resolve.alias = {
			...config.resolve.alias,
			'@': paths.src,
		};
	}

	if (config?.module?.rules) {
		config.module.rules = config.module.rules.map((rule: any) => {
			if (/svg/.test(rule.test as string)) {
				return {
					...rule,
					exclude: /\.svg$/i,
				};
			}

			return rule;
		});

		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});

		config.module.rules.push({
			test: /\.jpg$/,
			loader: 'file-loader',
			options: {
				name: '[name].[ext]',
			},
		});

		config.module.rules.push(buildCssLoader(true));
	}

	config?.plugins?.push(
		new DefinePlugin({
			__IS_DEV__: JSON.stringify(true),
			__API__: JSON.stringify('https://testapi.ru'),
			__PROJECT__: JSON.stringify('storybook'),
		}),
	);

	return config;
};
