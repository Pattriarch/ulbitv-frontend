module.exports = {
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true
    },
    env: {
        browser: true, es2021: true
    },
    extends: [
        'standard-with-typescript',
        'plugin:react/recommended',
        'plugin:i18next/recommended'
    ],
    overrides: [
        {
            env: {
                node: true
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script'
            }
        },
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
                'max-len': 'off'
            }
        }
    ],
    parserOptions: {
        project: './tsconfig.json', ecmaVersion: 'latest', sourceType: 'module'
    },
    plugins: [
        'react',
        'i18next',
        'react-hooks',
        'ulbitv-fsd'
    ],
    rules: {
        'ulbitv-fsd/path-validator': 1, // todo: пофиксить пути и установить значение в 2
        semi: [2, 'always'],
        '@typescript-eslint/semi': 'off',
        'react/jsx-indent': 'off',
        'no-tabs': ['error', { allowIndentationTabs: true }],
        'react/jsx-indent-props': 'off',
        indent: 'off',
        'react/jsx-filename-extension': [2, {
            extensions: ['.js', '.jsx', '.tsx']
        }],
        'import/no-unresolved': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/array-type': 'off',
        '@typescript-eslint/space-before-function-paren': 'off',
        'react/button-has-type': 'error',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/ban-ts-comment': 'warn',
        'i18next/no-literal-string': ['warn', {
            markupOnly: true,
            ignoreAttribute: ['nav', 'role', 'to', 'data-testid', 'placeholder', 'name', 'target', 'direction', 'justify', 'align', 'gap']
        }],
        'max-len': ['error', { code: 130, ignoreComments: true }],
        'react/display-name': 'off',
        '@typescript-eslint/prefer-includes': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        'n/handle-callback-err': 'off',
        '@typescript-eslint/no-confusing-void-expression': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': 'off', // временно
        '@typescript-eslint/no-dynamic-delete': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'no-void': 'off',
        '@typescript-eslint/no-invalid-void-type': 'off',
        'no-mixed-spaces-and-tabs': 'off', // временно
        '@typescript-eslint/consistent-type-assertions': 'off', // временно
        '@typescript-eslint/member-delimiter-style': ['warn', {
            multiline: {
                delimiter: 'comma',
                requireLast: true
            },
            singleline: {
                delimiter: 'comma',
                requireLast: true
            },
            overrides: {
                interface: {
                    multiline: {
                        delimiter: 'semi',
                        requireLast: true
                    }
                }
            }
        }]
    }
};
