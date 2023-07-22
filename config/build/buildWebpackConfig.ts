import type webpack from 'webpack';

import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { type BuildOptions } from './types/config';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { paths, mode, isDev } = options;
    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
            publicPath: '/'
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options)
        },
        devtool: isDev ? 'eval-cheap-module-source-map' : undefined,
        resolve: buildResolvers(options),
        devServer: isDev ? buildDevServer(options) : undefined
    };
}
