const jsConfig = require('./index.js');
const typescriptEslint = require('typescript-eslint');

// Configuration that extends the JavaScript config with TypeScript rules.
module.exports = [
    // Include our base JavaScript config.
    ...jsConfig,
    // Use the recommended TypeScript configs as a base, follow up with our overrides.
    ...typescriptEslint.configs.recommended.map((conf) => ({
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
            // Note: you must disable the base rule as it can report incorrect errors.
            'no-shadow': 'off',
            // This rule extends the base eslint/no-shadow rule. It adds support for TypeScript's this parameters and global augmentation, and adds options for TypeScript features.
            '@typescript-eslint/no-shadow': ['error'],
            // Not allowing non-null assertions is overly strict.
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
            // Require methods and functions to be marked async if they return a Promise.
            '@typescript-eslint/promise-function-async': 'error',
            // Force the usage of "import type" for type imports.
            '@typescript-eslint/consistent-type-imports': 'error',
            // Force consistent array type definitions.
            '@typescript-eslint/array-type': 'error',
            // Force better grouping of overloaded signatures.
            '@typescript-eslint/adjacent-overload-signatures': 'error',
            // Disallow "in" operator with arrays. It is better to use "of".
            '@typescript-eslint/no-for-in-array': 'error',
            // Avoid using eval().
            '@typescript-eslint/no-implied-eval': 'error',
            // Avoid type specifications that are not necessary.
            '@typescript-eslint/no-inferrable-types': 'error',
            // Disallow usage of non-null assertion "!" next to an assignment or equality check.
            '@typescript-eslint/no-confusing-non-null-assertion': 'error',
            // Prefer "includes()" over "indexOf() !== -1" when checking for existence.
            '@typescript-eslint/prefer-includes': 'error',
            // Allow to use underscore as a way to ignore unused args.
            '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_', 'ignoreRestSiblings': true }],
            // Use TS extension of no-empty-function, e.g. allow to use empty constructors with parameter properties.
            'no-empty-function': 'off',
            '@typescript-eslint/no-empty-function': 'error',
            // Disable the "import/named" rule for TypeScript files, as suggested by the authors of the plugin.
            'import/named': 'off',
        },
    },
];
