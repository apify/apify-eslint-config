const globals = require('globals');
const js = require('@eslint/js');
const typescriptEslint = require('typescript-eslint');
// const typescriptEslintPlugin = require('@typescript-eslint/eslint-plugin');
// const typescriptEslintParser = require('@typescript-eslint/parser');

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
            // It's fine to use await in loops, e.g. for loop with awaits in it for sequential execution.
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
            // So that the functions calling return show up in stack traces in case of an error.
            'no-return-await': 'off',
            // Do not enforce newlines between class members if they have a single line.
            'lines-between-class-members': ['error', 'always', {
                exceptAfterSingleLine: true,
            }],
        },
    },
    // Configuration for TypeScript files only.
    ...tseslint.configs.recommended.map((conf) => ({ // Use the recommended TypeScript configuration.
        ...conf,

        files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],
      })),
    {
        files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],

        plugins: {
            '@typescript-eslint': typescriptEslint.plugin,
        },

        languageOptions: {
            parser: typescriptEslint.parser,
            ecmaVersion: 2022,
        },

        rules: {
            // TypeScript doesn't support imports with `.ts` extensions, and `.js` makes the rule complain.
            'import/extensions': 'off',
            // Allow semicolons at the end of the code block.
            '@typescript-eslint/no-extra-semi': 'off',
            // Note: you must disable the base rule as it can report incorrect errors.
            'no-shadow': 'off',
            // This rule extends the base eslint/no-shadow rule. It adds support for TypeScript's this parameters and global augmentation, and adds options for TypeScript features.
            '@typescript-eslint/no-shadow': ['error'],
            '@typescript-eslint/no-non-null-assertion': 'off',
            // Note: you must disable the base rule as it can report incorrect errors.
            'no-useless-constructor': 'off',
            // This rule extends the base eslint/no-useless-constructor rule for TypeScript.
            '@typescript-eslint/no-useless-constructor': 'error',
            // Note: you must disable the base rule as it can report incorrect errors.
            'default-param-last': 'off',
            // This rule extends the base eslint/default-param-last rule for TypeScript.
            '@typescript-eslint/default-param-last': 'error',
            // Force promises to be awaited, returned, voided, .then()ed or .catch()ed.
            '@typescript-eslint/no-floating-promises': 'error',
            // Disallow the use of promises in places where they shouldn't be used.
            '@typescript-eslint/await-thenable': 'error',
            // Do not misuse promises in places like if conditions, or passing them to functions that don't handle promises.
            '@typescript-eslint/no-misused-promises': ['error', {
                checksVoidReturn: {
                    arguments: false,
                    attributes: false,
                },
            }],
            // Require methods and fucnctions to be marked async if they return a Promise.
            '@typescript-eslint/promise-function-async': 'error',
            // Force the usage of "import type" for type imports.
            '@typescript-eslint/consistent-type-imports': 'error',
        },
    },
];
