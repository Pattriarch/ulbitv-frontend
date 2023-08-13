import path from 'path';

export default {
	globals: {
		__IS_DEV__: true,
		__API__: '',
		__PROJECT__: 'jest',
	},
	clearMocks: true,
	testEnvironment: 'jsdom',
	coveragePathIgnorePatterns: ['/node_modules/'],
	moduleDirectories: ['node_modules'],
	modulePaths: ['<rootDir>src'],
	setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
	moduleNameMapper: {
		'\\.s?css$': 'identity-obj-proxy',
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			path.resolve(__dirname, 'jestEmptyComponent.tsx'),
		'^@/(.*)$': '<rootDir>/src/$1',
	},
	moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
	rootDir: '../../',
	testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
	reporters: [
		'default',
		[
			'jest-html-reporters',
			{
				publicPath: '<rootDir>/reports/unit',
				filename: 'report.html',
				openReport: false,
				inlineSource: true,
			},
		],
	],
};
