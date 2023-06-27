export function buildSvgLoader(): object {
    return {
        test: /\.svg$/,
        use: ['@svgr/webpack']
    };
}
