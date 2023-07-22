import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildCssLoader(isDev: boolean): object {
    return {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
            // Creates `style` nodes from JS strings
            // "style-loader",
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        // with regEx
                        // auto: /\.module\./i,
                        auto: (resPath: string) => Boolean(resPath.includes('.module')),
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]'
                    }
                }
            },
            // Compiles Sass to CSS
            'sass-loader'
        ]
    };
}
