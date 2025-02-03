const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');
const globals = require('globals');

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

            ecmaVersion: 'latest',
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
            // ++ and -- are fine.
            'no-plusplus': 'off',
            quotes: ['error', 'single', {
                avoidEscape: true,
                allowTemplateLiterals: true,
            }],
            // It's ok to use functions before they are defined.
            'no-use-before-define': ['error', {
                'functions': false,
                'classes': true,
                'variables': true,
                'allowNamedExports': false,
            }],
            // Disable as forcing names for function expression doesn't bring much value.
            'func-names': 'off',
            // Disable as this rule is overly strict and can cause breaking changes.
            'class-methods-use-this': 'off',
            // Forcing "use strict" is not necessary.
            strict: 'off',
            // We don't want to force newlines before and after curly braces.
            'object-curly-newline': ['error', { 'consistent': true }],
            // It's fine to use await in loops, e.g. for loop with awaits in it for sequential execution.
            'no-await-in-loop': 'off',
            // It's fine to use continue in loops.
            'no-continue': 'off',
            'arrow-body-style': 'off',
            'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
            // Set max line length to 160 characters.
            'max-len': ['error', {
                code: 160,
                ignoreUrls: true,
                ignoreTemplateLiterals: true,
            }],
            // Allow less strict formatting of function parentheses.
            'function-paren-newline': 'off',
            // Prefer destructuring for certain cases only. Forcing destructuring for arrays can make the code less readable.
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
            // Allow to use underscore as a way to ignore unused args. Allow unused vars from destructuring.
            'no-unused-vars': ['error', { 'argsIgnorePattern': '^_', 'ignoreRestSiblings': true }],

            // Rules related to eslint-plugin-import.
            // Force external modules to be specified in the package.json.
            'import/no-extraneous-dependencies': ['error', {
                // Allow devDependencies in test files and folders. Also in eslint config files.
                devDependencies: ['**/*.spec.*', '**/*.test.*', '**/test/**', '**/tests/**', 'eslint.config.{mjs,js,cjs,ts,mts,cts}'],
            }],
            // Force the use of named exports.
            'import/no-default-export': 'error',
            // It's ok to not have a default export and we force named exports anyway.
            'import/prefer-default-export': 'off',
            'import/no-unresolved': 'off',
            // Force extensions for imports. Helps to prevent ESM issues.
            'import/extensions': ['error', 'always'],
            // Force ordering of imports.
            'import/order': ['error', {
                groups: ['builtin', 'external', ['parent', 'sibling'], 'index', 'object'],
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
                'newlines-between': 'always',
                pathGroups: [
                    {
                        pattern: '@apify/**',
                        group: 'external',
                        position: 'after',
                    },
                    {
                        pattern: '@apify-packages/**',
                        group: 'external',
                        position: 'after',
                    },
                ],
                pathGroupsExcludedImportTypes: ['builtin'],
            }],
            'import/no-import-module-exports': 'off',
        },
    },
];
