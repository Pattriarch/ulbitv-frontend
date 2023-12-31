module.exports = {
	parserOptions: {
		project: './tsconfig.json',
		tsconfigRootDir: __dirname,
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	globals: {
		__IS_DEV__: true,
		__API__: true,
		__PROJECT__: true,
	},
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'standard-with-typescript',
		'plugin:react/recommended',
		'plugin:i18next/recommended',
		'prettier',
		'plugin:cypress/recommended',
	],
	plugins: [
		'react',
		'i18next',
		'react-hooks',
		'ulbitv-fsd',
		'unused-imports',
		'import',
	],
	ignorePatterns: [
		'.eslintrc.js',
		'json-server/index.js',
		'cypress.config.ts',
		'scripts'
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
		{
			files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
			rules: {
				'i18next/no-literal-string': 0,
				'max-len': 0,
			},
		},
	],
	rules: {
		// error

		'import/newline-after-import': 2,
		'import/order': [
			2,
			{
				pathGroups: [
					{
						pattern: '@/**',
						group: 'internal',
						position: 'after',
					},
					{
						pattern: './**.module.*',
						group: 'internal',
						position: 'after',
					},
				],
				'newlines-between': 'always',
				alphabetize: {
					order: 'asc',
					caseInsensitive: false,
				},
			},
		],
		'unused-imports/no-unused-imports': 2,
		'ulbitv-fsd/path-validator': [2, { alias: '@' }],
		'ulbitv-fsd/public-api-validator': [
			2,
			{
				alias: '@',
				testFilesPatterns: [
					'**/*.test.*',
					'**/*.stories.*',
					'**/StoreDecorator.tsx',
				],
			},
		],
		'ulbitv-fsd/layer-imports-validator': [
			2,
			{
				alias: '@',
				ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
			},
		],
		semi: [2, 'always'],
		'react/jsx-no-constructed-context-values': 2,
		'react/jsx-filename-extension': [
			2,
			{
				extensions: ['.js', '.jsx', '.tsx'],
			},
		],
		'react/jsx-max-props-per-line': [2, { maximum: 3, when: 'multiline' }],
		'react/button-has-type': 2,
		'react-hooks/rules-of-hooks': 2,
		'react-hooks/exhaustive-deps': 2,
		'max-len': [
			2,
			{
				code: 130,
				ignoreComments: true,
			},
		],

		// warning

		'@typescript-eslint/ban-ts-comment': 1,
		'i18next/no-literal-string': [
			1,
			{
				markupOnly: true,
				ignoreAttribute: [
					'alt',
					'wrap',
					'size',
					'weight',
					'color',
					'variant',
					'name',
					'tag',
					'as',
					'nav',
					'role',
					'to',
					'data-testid',
					'placeholder',
					'name',
					'target',
					'direction',
					'justify',
					'align',
					'gap',
					'border',
					'theme',
				],
			},
		],
		'@typescript-eslint/no-unused-vars': 1,
		'@typescript-eslint/member-delimiter-style': [
			1,
			{
				multiline: {
					delimiter: 'comma',
					requireLast: true,
				},
				singleline: {
					delimiter: 'comma',
					requireLast: true,
				},
				overrides: {
					interface: {
						multiline: {
							delimiter: 'semi',
						},
					},
				},
			},
		],

		// off

		'@typescript-eslint/consistent-type-imports': 0,
		'@typescript-eslint/semi': 0,
		'import/no-unresolved': 0,
		'no-unused-vars': 0,
		'@typescript-eslint/array-type': 0,
		'@typescript-eslint/space-before-function-paren': 0,
		'react/function-component-definition': 0,
		'no-shadow': 0,
		'@typescript-eslint/strict-boolean-expressions': 0,
		'react/react-in-jsx-scope': 0,
		'@typescript-eslint/naming-convention': 0,
		'react/display-name': 0,
		'@typescript-eslint/prefer-includes': 0,
		'n/handle-callback-err': 0,
		'@typescript-eslint/no-confusing-void-expression': 0,
		'@typescript-eslint/prefer-nullish-coalescing': 0,
		'@typescript-eslint/no-dynamic-delete': 0,
		'@typescript-eslint/explicit-function-return-type': 0,
		'no-void': 0,
		'@typescript-eslint/no-invalid-void-type': 0,
		'cypress/unsafe-to-chain-command': 0,
		'react/prop-types': 0,
		'@typescript-eslint/no-namespace': 0,
		'@typescript-eslint/no-misused-promises': 0,
		'@typescript-eslint/method-signature-style': 0,
		'@typescript-eslint/consistent-type-assertions': 0,
		'@typescript-eslint/promise-function-async': 0,
	},
};
