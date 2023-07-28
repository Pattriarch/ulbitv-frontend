export function buildSvgLoader(): object {
	return {
		test: /\.svg$/,
		use: [{
			loader: '@svgr/webpack',
			options: {
				icon: true,
				svgoConfig: {
					plugins: [
						{
							name: 'convertColors',
							params: {
								currentColor: true,
							},
						},
					],
				},
			},
		}],
	};
}
