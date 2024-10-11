const globals = require('globals');
const js = require('@eslint/js');
const typescriptEslintPlugin = require('@typescript-eslint/eslint-plugin');
const typescriptEslintParser = require('@typescript-eslint/parser');

const {
    FlatCompat,
} = require('@eslint/eslintrc');

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = [...compat.extends('airbnb-base'),
    {
        linterOptions: {
            reportUnusedDisableDirectives: true,
        },

        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.browser,
            },

            ecmaVersion: 2022,
        },

        rules: {
            indent: ['error', 4, {
                SwitchCase: 1,
            }],
            // Allow underscore dangle for a few specific properties, mainly `_id`.
            'no-underscore-dangle': [2, {
                allow: [
                    '_id',
                    '_outputSeqNo',
                    '_queueOrderNo',
                    '_skipOutput',
                    '_retryCount',
                    '_crashesCount',
                    '_pageFailed',
                    '_pageCrashed',
                ],
                allowAfterThis: true,
            }],
            'no-use-before-define': 'off',
            'no-param-reassign': 'off',
            'consistent-return': 'off',
            'array-callback-return': 'off',
            'no-plusplus': 'off',
            quotes: ['error', 'single', {
                avoidEscape: true,
                allowTemplateLiterals: true,
            }],
            'func-names': 'off',
            'import/no-extraneous-dependencies': ['error', {
                devDependencies: true,
            }],
            'import/prefer-default-export': 'off',
            'import/no-unresolved': 'off',
            'import/extensions': 'off',
            'import/order': ['error', {
                groups: ['builtin', 'external', ['parent', 'sibling'], 'index', 'object'],
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
                'newlines-between': 'always',
            }],
            'class-methods-use-this': 'off',
            strict: 'off',
            'object-curly-newline': 'off',
            'no-await-in-loop': 'off',
            'arrow-body-style': 'off',
            'import/no-named-as-default': 'off',
            'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
            'no-prototype-builtins': 'off',
            'max-len': ['error', {
                code: 160,
                ignoreUrls: true,
            }],

            'no-continue': 'off',
            'function-paren-newline': 'off',
            'import/no-import-module-exports': 'off',
            'no-promise-executor-return': 'off',
            'prefer-destructuring': ['error', {
                VariableDeclarator: {
                    array: false,
                    object: true,
                },
                AssignmentExpression: {
                    array: false,
                    object: false,
                },
            }, {
                enforceForRenamedProperties: false,
            }],
            'no-return-await': 'off', // So that the functions calling return show up in stack traces in case of an error
        },
    },
    // Configuration for TypeScript files only.
    {
        files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],

        plugins: {
            '@typescript-eslint': typescriptEslintPlugin,
        },

        languageOptions: {
            parser: typescriptEslintParser,
            ecmaVersion: 2022,
        },

        rules: {
            'no-unused-vars': 'off',
            'import/extensions': 'off',
            '@typescript-eslint/no-unused-vars': ['error'],
            '@typescript-eslint/no-extra-semi': 'off',
            'no-shadow': 'off',
            '@typescript-eslint/no-shadow': ['error'],
            '@typescript-eslint/no-non-null-assertion': 'off',
            'no-useless-constructor': 'off',
            '@typescript-eslint/no-useless-constructor': 'error',
            'default-param-last': 'off',
            '@typescript-eslint/default-param-last': 'error',

            'lines-between-class-members': ['error', 'always', {
                exceptAfterSingleLine: true,
            }],

            '@typescript-eslint/no-floating-promises': 'error',
            '@typescript-eslint/await-thenable': 'error',

            '@typescript-eslint/no-misused-promises': ['error', {
                checksVoidReturn: {
                    arguments: false,
                    attributes: false,
                },
            }],

            '@typescript-eslint/promise-function-async': 'error',
            '@typescript-eslint/consistent-type-imports': 'error',
        },
    },
];
