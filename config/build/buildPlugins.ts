import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { type BuildOptions } from './types/config';

export function buildPlugins({ isDev, paths, apiUrl, project }: BuildOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
        new HTMLWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
            __PROJECT__: JSON.stringify(project)
        })
    ];

    const devPlugins = [
        new ReactRefreshWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new BundleAnalyzerPlugin({
            openAnalyzer: false
        }),
        new CircularDependencyPlugin({
            exclude: /node_modules/,
            failOnError: true
        }),
        new ForkTsCheckerWebpackPlugin({
            typescript: {
                diagnosticOptions: {
                    semantic: true,
                    syntactic: true
                },
                mode: 'write-references'
            }
        })
    ];

    const prodPlugins = [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        new CopyPlugin({
            patterns: [
                { from: paths.locales, to: paths.buildLocales }
            ]
        })
    ];

    return isDev ? [...plugins, ...devPlugins] : [...plugins, ...prodPlugins];
}
