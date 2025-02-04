const pluginJest = require('eslint-plugin-jest');

// Configuration for Jest test files only.
module.exports = [
    {
        files: ['**/*.spec.*', '**/*.test.*', '**/test/**', '**/tests/**'],
        ...pluginJest.configs['flat/recommended'],
        rules: {
            // Use the recommended rules, but override a few.
            ...pluginJest.configs['flat/recommended'].rules,
            // Force at least one expect() in each test.
            'jest/expect-expect': 'error',
            // Disallow disabled tests.
            'jest/no-disabled-tests': 'error',
        }
    },
];
