import path from 'path';

import type webpack from 'webpack';

import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import {
	type BuildEnv,
	BuildMode,
	type BuildPaths,
} from './config/build/types/config';

function getApiUrl(mode: BuildMode, apiUrl?: string) {
	if (apiUrl) {
		return apiUrl;
	}
	if (mode === 'production') {
		return '/api';
	}
	return 'http://localhost:8000';
}

export default (env: BuildEnv): webpack.Configuration => {
	const paths: BuildPaths = {
		build: path.resolve(__dirname, 'dist'),
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		src: path.resolve(__dirname, 'src'),
		locales: path.resolve(__dirname, 'public', 'locales'),
		buildLocales: path.resolve(__dirname, 'dist', 'locales'),
	};

	const mode = env?.mode || 'development';
	const PORT = env?.port || 3000;
	const apiUrl = getApiUrl(mode, env?.apiUrl);

	const isDev = mode === 'development';

	return buildWebpackConfig({
		mode,
		paths,
		isDev,
		port: PORT,
		apiUrl,
		project: 'frontend',
	});
};
