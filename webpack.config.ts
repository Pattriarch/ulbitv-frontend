import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { type BuildEnv, type BuildPaths } from './config/build/types/config'
import path from 'path'
import type webpack from 'webpack'

export default (env: BuildEnv): webpack.Configuration => {
    const paths: BuildPaths = {
        build: path.resolve(__dirname, 'dist'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src')
    }

    const mode = env.mode || 'development'
    const isDev = mode === 'development'
    const PORT = env.port || 3000

    return buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT
    })
}
